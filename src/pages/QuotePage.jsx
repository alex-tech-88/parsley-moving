import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useTheme } from '@context/useTheme'
import DatePickerInput from '@components/ui/DatePickerInput'
import FormField from '@components/ui/FormField'
import SelectArrow from '@components/ui/SelectArrow'
import { SEO } from '@hooks/useSEO'
import {
  getAddressError,
  validatePersonal,
  validateEmail,
  validateNotes,
  validateMoveSize,
} from '@utils/validation'
import { PHONE } from '@/constant'
import { AddressAutofill } from '@mapbox/search-js-react'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const MOVE_TYPES = ['Residential', 'Commercial', 'Special Event', 'Other']
const MOVE_SIZES = ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4+ Bedroom', 'Other']
const ACCESS_TYPES = ['Elevator', 'Walk up', 'Ground floor']
const TIME_SLOTS = [
  'Morning (8am–12pm)',
  'Afternoon (12pm–5pm)',
  'Evening (5pm–8pm)',
  'Flexible',
]
const HEAR_OPTIONS = ['Google', 'Yelp', 'Instagram / Facebook', 'Friend / Referral', 'Other']
const IN_PERSON_OPTIONS = [
  { value: 'in-person', label: 'In-person visit' },
  { value: 'video', label: 'Video call' },
  { value: 'no', label: 'No thanks' },
]

const STEPS = ['Moving Info', 'Addresses', 'Personal Info']
const PERSONAL_FIELDS = ['firstName', 'lastName', 'phone']
const ADDRESS_FIELDS = ['moveFrom', 'moveTo']
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const shouldOfferInPersonQuote = (form) => {
  if (form.moveType === 'Residential') {
    return ['2 Bedroom', '3 Bedroom', '4+ Bedroom'].includes(form.moveSize)
  }
  if (['Commercial', 'Special Event', 'Other'].includes(form.moveType)) {
    return Number(form.moveSize) >= 100
  }
  return false
}

export default function QuotePage() {
  const { t } = useTheme()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const [form, setForm] = useState(() => ({
    moveFrom: searchParams.get('from') || '',
    moveTo: searchParams.get('to') || '',
    moveDate: '',
    pickupTime: '',
    moveType: '',
    moveSize: '',
    inPersonQuote: '',
    fromAccess: '',
    toAccess: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    heardFrom: '',
    notes: '',
  }))

  const set = (field, value) => {
    setForm((p) => {
      const next = { ...p, [field]: value }
      if (field === 'moveType') {
        next.moveSize = ''
        next.inPersonQuote = ''
      }
      if (field === 'moveSize') {
        next.inPersonQuote = ''
      }
      return next
    })

    if (status === 'error') setStatus('idle')
    if (!touched[field]) return

    if (PERSONAL_FIELDS.includes(field)) {
      setErrors((p) => ({ ...p, [field]: validatePersonal(field, value) }))
    } else if (ADDRESS_FIELDS.includes(field)) {
      setErrors((p) => ({ ...p, [field]: getAddressError(value) }))
    } else if (field === 'email') {
      setErrors((p) => ({ ...p, email: validateEmail(value) }))
    } else if (field === 'notes') {
      setErrors((p) => ({ ...p, notes: validateNotes(value) }))
    } else {
      if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }))
    }
  }

  const handleBlur = (field) => {
    setTouched((p) => ({ ...p, [field]: true }))

    let msg = ''
    if (PERSONAL_FIELDS.includes(field)) msg = validatePersonal(field, form[field])
    else if (ADDRESS_FIELDS.includes(field)) msg = getAddressError(form[field])
    else if (field === 'email') msg = validateEmail(form[field])
    else if (field === 'notes') msg = validateNotes(form[field])

    setErrors((p) => ({ ...p, [field]: msg }))
  }

  const handleAddressRetrieve = (field) => (res) => {
    const feature = res?.features?.[0]
    const props = feature?.properties || {}
    const full =
      props.full_address ||
      feature?.place_name ||
      feature?.properties?.name ||
      ''

    if (!full) return

    setForm((p) => ({ ...p, [field]: full }))
    setTouched((p) => ({ ...p, [field]: true }))
    setErrors((p) => ({ ...p, [field]: getAddressError(full) }))
    if (status === 'error') setStatus('idle')
  }

  const validateStep = (s) => {
    const e = {}

    if (s === 1) {
      if (!form.moveDate) e.moveDate = 'Required'
      if (!form.pickupTime) e.pickupTime = 'Required'
      if (!form.moveType) e.moveType = 'Required'
      if (form.moveType && !form.moveSize) e.moveSize = 'Required'
    }

    if (s === 2) {
      const mfErr = getAddressError(form.moveFrom)
      const mtErr = getAddressError(form.moveTo)
      if (mfErr) e.moveFrom = mfErr
      if (mtErr) e.moveTo = mtErr
      if (!form.fromAccess) e.fromAccess = 'Required'
      if (!form.toAccess) e.toAccess = 'Required'
    }

    if (s === 3) {
      const fnErr = validatePersonal('firstName', form.firstName)
      const lnErr = validatePersonal('lastName', form.lastName)
      const phErr = validatePersonal('phone', form.phone)
      const emErr = validateEmail(form.email)
      const ntErr = validateNotes(form.notes)
      if (fnErr) e.firstName = fnErr
      if (phErr) e.phone = phErr
      if (emErr) e.email = emErr
      if (ntErr) e.notes = ntErr
    }

    return e
  }

  const next = () => {
    if (step === 2) {
      setTouched((p) => ({ ...p, moveFrom: true, moveTo: true }))
    }
    const e = validateStep(step)
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setErrors({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep((s) => s + 1)
  }

  const back = () => {
    setErrors({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (step === 1) navigate(-1)
    else setStep((s) => s - 1)
  }

  const handleSubmit = async () => {
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      moveFrom: true,
      moveTo: true,
      notes: true,
    })

    const e = validateStep(3)
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }

    if (!executeRecaptcha) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const recaptchaToken = await executeRecaptcha('submit_quote')

      const payload = {
        moveFrom: form.moveFrom.trim(),
        moveTo: form.moveTo.trim(),
        moveDate: form.moveDate,
        pickupTime: form.pickupTime,
        moveType: form.moveType,
        moveSize: form.moveSize,
        fromAccess: form.fromAccess,
        toAccess: form.toAccess,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim() || '-',
        phone: form.phone.trim(),
        email: form.email.trim(),
        heardFrom: form.heardFrom.trim() || '-',
        notes: form.notes.trim() || '-',
        inPersonQuote: form.inPersonQuote || '-',
        createdAt: serverTimestamp(),
        source: window.location.href,
      }

      await addDoc(collection(db, 'quoteRequests'), payload)

      setStatus('success')
      setErrors({})
      setTouched({})
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    [
      'w-full px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-xl border',
      'text-sm sm:text-base lg:text-lg outline-none',
      'transition-all duration-200 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green',
      'bg-white dark:bg-[#2c2c2c] text-graphite dark:text-white',
      'placeholder:text-[#9ca3af] dark:placeholder:text-[#6b6b6b]',
      errors[field] ? 'border-red-400' : 'border-[#e5e7eb] dark:border-[#3a3a3a]',
    ].join(' ')

  const selectClass = (field) =>
    [
      'w-full px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-xl border',
      'text-sm sm:text-base lg:text-lg outline-none appearance-none cursor-pointer',
      'transition-all duration-200 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green',
      'bg-white dark:bg-[#2c2c2c] text-graphite dark:text-white',
      errors[field] ? 'border-red-400' : 'border-[#e5e7eb] dark:border-[#3a3a3a]',
    ].join(' ')

  const offerVisible = shouldOfferInPersonQuote(form)

  return (
    <>
      <SEO
        title="Get a Free Moving Quote"
        description="Request a free moving quote from Parsley Moving. We serve the Bay Area 7 days a week."
        canonical="https://parsleymoving.com/quote"
        noindex={true}
      />
      <section
        className="min-h-[80vh] py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-12"
        style={{ backgroundColor: t.bg.section }}
      >
        <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          {status === 'success' ? (
            <div className="text-center">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center mx-auto mb-8"
                style={{ backgroundColor: 'rgba(25,173,87,0.12)' }}
              >
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-brand-green"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite dark:text-white mb-4">
                Quote Request Sent!
              </h2>

              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-10 mx-auto max-w-lg text-[#6b7280] dark:text-[#a0a0a0]">
                Thank you,{' '}
                <span className="font-semibold text-graphite dark:text-white">
                  {form.firstName}
                </span>
                ! We&apos;ll review your move details and get back to you shortly.
              </p>

              <button
                onClick={() => navigate('/')}
                className="text-sm sm:text-base underline text-[#6b7280] dark:text-[#a0a0a0]"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="mb-10 sm:mb-14">
                <p className="text-sm sm:text-base font-medium text-brand-green uppercase tracking-widest mb-1">
                  Step {step} of {STEPS.length}
                </p>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-graphite dark:text-white mb-6">
                  {STEPS[step - 1]}
                </h1>

                <div className="flex items-center gap-2 sm:gap-3">
                  {STEPS.map((label, i) => {
                    const s = i + 1
                    const done = s < step
                    const current = s === step
                    return (
                      <div key={s} className="flex items-center gap-2 sm:gap-3 flex-1">
                        <div
                          className={[
                            'h-1.5 sm:h-2 rounded-full flex-1 transition-all duration-500',
                            done || current
                              ? 'bg-brand-green'
                              : 'bg-[#e5e7eb] dark:bg-[#3a3a3a]',
                          ].join(' ')}
                        />
                        {i < STEPS.length - 1 && (
                          <div
                            className={[
                              'h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full shrink-0 transition-all duration-500',
                              done ? 'bg-brand-green' : 'bg-[#e5e7eb] dark:bg-[#3a3a3a]',
                            ].join(' ')}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="hidden sm:flex justify-between mt-2">
                  {STEPS.map((label, i) => (
                    <span
                      key={i}
                      className={[
                        'text-xs font-medium transition-colors duration-300',
                        i + 1 <= step
                          ? 'text-brand-green'
                          : 'text-[#9ca3af] dark:text-[#6b6b6b]',
                      ].join(' ')}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="flex flex-col gap-7 sm:gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FormField label="Estimated move date" required error={errors.moveDate}>
                      <DatePickerInput
                        value={form.moveDate}
                        onChange={(val) => set('moveDate', val)}
                        hasError={!!errors.moveDate}
                      />
                    </FormField>

                    <FormField label="Preferred pick up time" required error={errors.pickupTime}>
                      <div className="relative">
                        <select
                          value={form.pickupTime}
                          onChange={(e) => set('pickupTime', e.target.value)}
                          className={selectClass('pickupTime')}
                        >
                          <option value="">Choose an option</option>
                          {TIME_SLOTS.map((s) => <option key={s}>{s}</option>)}
                        </select>
                        <SelectArrow />
                      </div>
                    </FormField>
                  </div>

                  <FormField label="Type of move" required error={errors.moveType}>
                    <div className="relative">
                      <select
                        value={form.moveType}
                        onChange={(e) => set('moveType', e.target.value)}
                        className={selectClass('moveType')}
                      >
                        <option value="">Choose an option</option>
                        {MOVE_TYPES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                      <SelectArrow />
                    </div>
                  </FormField>

                  {/* Residential → выбор комнат */}
                  {form.moveType === 'Residential' && (
                    <FormField label="Size of move" required error={errors.moveSize}>
                      <div className="relative">
                        <select
                          value={form.moveSize}
                          onChange={(e) => set('moveSize', e.target.value)}
                          className={selectClass('moveSize')}
                        >
                          <option value="">Choose an option</option>
                          {MOVE_SIZES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                        <SelectArrow />
                      </div>
                    </FormField>
                  )}

                  {['Commercial', 'Special Event', 'Other'].includes(form.moveType) && (
                    <FormField
                      label="Approximate size"
                      required
                      error={errors.moveSize}
                      hint="Estimated square footage"
                    >
                      <input
                        type="text"
                        inputMode="numeric"
                        value={form.moveSize}
                        placeholder="e.g. 1500"
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 6)
                          set('moveSize', val)
                        }}
                        onBlur={() => handleBlur('moveSize')}
                        className={inputClass('moveSize')}
                      />
                    </FormField>
                  )}

                  {/* Free Quote when selected */}
                  {form.moveType && (
                    <div className="rounded-xl border border-[#e5e7eb] dark:border-[#3a3a3a] p-5 sm:p-6 bg-white dark:bg-[#2c2c2c]">
                      <p className="text-sm sm:text-base font-semibold text-graphite dark:text-white mb-1">
                        Are you interested in our free quote?
                      </p>
                      <p className="text-sm sm:text-base text-[#6b7280] dark:text-[#a0a0a0] mb-4">
                        We will come to your home and price your quote in-person, or connect via video call.
                      </p>

                      {offerVisible ? (
                        <div className="flex flex-col gap-3">
                          {IN_PERSON_OPTIONS.map((opt) => (
                            <label
                              key={opt.value}
                              className="flex items-center gap-3 cursor-pointer group"
                              onClick={() => set('inPersonQuote', opt.value)}
                            >
                              <div
                                className={[
                                  'w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-200',
                                  form.inPersonQuote === opt.value
                                    ? 'bg-brand-green border-brand-green'
                                    : 'border-[#d1d5db] dark:border-[#4a4a4a] group-hover:border-brand-green',
                                ].join(' ')}
                              >
                                {form.inPersonQuote === opt.value && (
                                  <svg
                                    className="w-3 h-3 text-white"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    <polyline points="2 6 5 9 10 3" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-sm sm:text-base text-graphite dark:text-white">
                                {opt.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs sm:text-sm text-[#9ca3af] dark:text-[#6b6b6b] italic">
                          * Available for moves of 2+ bedrooms or 100+ sq ft.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-7 sm:gap-8"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-brand-green uppercase tracking-wide mb-4">
                      Pick Up Address
                    </h3>

                    <div className="flex flex-col gap-5">
                      <FormField
                        label="Address"
                        required
                        error={errors.moveFrom}
                        hint="*Please include the zip code"
                      >
                        <AddressAutofill
                          accessToken={MAPBOX_TOKEN}
                          onRetrieve={handleAddressRetrieve('moveFrom')}
                        >
                          <input
                            type="text"
                            value={form.moveFrom}
                            name="moveFrom"
                            autoComplete="section-pickup shipping address-line1"
                            placeholder="Enter full address with zip code"
                            onChange={(e) => set('moveFrom', e.target.value)}
                            onBlur={() => handleBlur('moveFrom')}
                            className={inputClass('moveFrom')}
                          />
                        </AddressAutofill>
                      </FormField>

                      <FormField label="Type of access" required error={errors.fromAccess}>
                        <div className="relative">
                          <select
                            value={form.fromAccess}
                            onChange={(e) => set('fromAccess', e.target.value)}
                            className={selectClass('fromAccess')}
                          >
                            <option value="">Choose an option</option>
                            {ACCESS_TYPES.map((a) => <option key={a}>{a}</option>)}
                          </select>
                          <SelectArrow />
                        </div>
                      </FormField>
                    </div>
                  </div>

                  <div className="h-px w-full bg-[#e5e7eb] dark:bg-[#3a3a3a]" />

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-brand-green uppercase tracking-wide mb-4">
                      Drop Off Address
                    </h3>

                    <div className="flex flex-col gap-5">
                      <FormField
                        label="Address"
                        required
                        error={errors.moveTo}
                        hint="*Please include the zip code"
                      >
                        <AddressAutofill
                          accessToken={MAPBOX_TOKEN}
                          onRetrieve={handleAddressRetrieve('moveTo')}
                        >
                          <input
                            type="text"
                            value={form.moveTo}
                            name="moveTo"
                            autoComplete="section-dropoff shipping address-line1"
                            placeholder="Enter full address with zip code"
                            onChange={(e) => set('moveTo', e.target.value)}
                            onBlur={() => handleBlur('moveTo')}
                            className={inputClass('moveTo')}
                          />
                        </AddressAutofill>
                      </FormField>

                      <FormField label="Type of access" required error={errors.toAccess}>
                        <div className="relative">
                          <select
                            value={form.toAccess}
                            onChange={(e) => set('toAccess', e.target.value)}
                            className={selectClass('toAccess')}
                          >
                            <option value="">Choose an option</option>
                            {ACCESS_TYPES.map((a) => <option key={a}>{a}</option>)}
                          </select>
                          <SelectArrow />
                        </div>
                      </FormField>
                    </div>
                  </div>
                </form>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="flex flex-col gap-6 sm:gap-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="First Name" required error={errors.firstName}>
                      <input
                        type="text"
                        value={form.firstName}
                        placeholder="First name"
                        onChange={(e) => set('firstName', e.target.value)}
                        onBlur={() => handleBlur('firstName')}
                        className={inputClass('firstName')}
                      />
                    </FormField>

                    <FormField label="Last Name" error={errors.lastName}>
                      <input
                        type="text"
                        value={form.lastName}
                        placeholder="Last name"
                        onChange={(e) => set('lastName', e.target.value)}
                        onBlur={() => handleBlur('lastName')}
                        className={inputClass('lastName')}
                      />
                    </FormField>
                  </div>

                  <FormField label="Phone Number" required error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      placeholder="+1 (555) 000-0000"
                      onChange={(e) => set('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={inputClass('phone')}
                    />
                  </FormField>

                  <FormField label="Email" required error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      placeholder="you@example.com"
                      onChange={(e) => set('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={inputClass('email')}
                      autoComplete="email"
                      inputMode="email"
                    />
                  </FormField>

                  <FormField
                    label="How did you hear about Parsley Moving?"
                    error={errors.heardFrom}
                  >
                    <div className="relative">
                      <select
                        value={form.heardFrom}
                        onChange={(e) => set('heardFrom', e.target.value)}
                        className={selectClass('heardFrom')}
                      >
                        <option value="">Choose an option</option>
                        {HEAR_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <SelectArrow />
                    </div>
                  </FormField>

                  <FormField label="Additional information" error={errors.notes}>
                    <textarea
                      rows={4}
                      value={form.notes}
                      placeholder="Any details about your move — special items, floor numbers, etc."
                      onChange={(e) => set('notes', e.target.value)}
                      onBlur={() => handleBlur('notes')}
                      style={{ resize: 'vertical' }}
                      className={inputClass('notes')}
                    />
                  </FormField>
                </div>
              )}

              {status === 'error' && (
                <p className="text-sm sm:text-base text-red-400 text-center mt-8 mb-2">
                  Something went wrong. Please try again or call us at{' '}
                  <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="underline">
                    {PHONE}
                  </a>
                </p>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 sm:mt-12">
                <button
                  onClick={back}
                  className="flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 rounded-xl border
                  font-medium text-sm sm:text-base
                  text-[#6b7280] dark:text-[#a0a0a0]
                  border-[#e5e7eb] dark:border-[#3a3a3a]
                  hover:border-brand-green hover:text-brand-green
                  transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  {step === 1 ? 'Cancel' : 'Back'}
                </button>

                {step < 3 ? (
                  <button
                    onClick={next}
                    className="flex items-center gap-2 px-6 sm:px-10 lg:px-14 py-3 sm:py-4
                    rounded-xl font-semibold text-sm sm:text-base lg:text-lg
                    text-white hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                    style={{ backgroundColor: t.brand.primary }}
                  >
                    Continue
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    className="flex items-center gap-2 px-6 sm:px-10 lg:px-14 py-3 sm:py-4
                    rounded-xl font-semibold text-sm sm:text-base lg:text-lg
                    text-white hover:opacity-90 active:scale-[0.98]
                    disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                    style={{ backgroundColor: t.brand.primary }}
                  >
                    {status === 'loading' ? (
                      <>
                        <span
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}