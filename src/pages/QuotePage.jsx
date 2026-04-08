import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useTheme } from '@context/useTheme'
import DatePickerInput from '@components/ui/DatePickerInput'

// 🔥 Uncomment when Firebase is connected:
// import { db } from '@/firebase'
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const MOVE_TYPES = ['Residential', 'Commercial', 'Special Event', 'Other']
const ACCESS_TYPES = ['House / Ground floor', 'Apartment with elevator', 'Apartment with stairs', 'Storage unit', 'Office']
const TIME_SLOTS = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–8pm)', 'Flexible']
const HEAR_OPTIONS = ['Google', 'Yelp', 'Instagram / Facebook', 'Friend / Referral', 'Other']

const STEPS = ['Moving Info', 'Addresses', 'Personal Info']

export default function QuotePage() {
  const { t } = useTheme()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const [form, setForm] = useState({
    moveFrom: '', moveTo: '',
    moveDate: '', pickupTime: '', moveType: '',
    fromAccess: '', toAccess: '',
    firstName: '', lastName: '', phone: '', email: '', heardFrom: '', notes: '',
  })

  useEffect(() => {
    const from = searchParams.get('from') || ''
    const to = searchParams.get('to') || ''
    setForm((p) => ({ ...p, moveFrom: from, moveTo: to }))
  }, [searchParams])

  // ── Validators ────────────────────────────────────────

  const validatePersonalField = (name, value) => {
    const v = value.trim()

    if (name === 'firstName') {
      if (!v)                          return 'First name is required'
      if (!/^[A-Za-z\s'-]+$/.test(v)) return 'Name can only contain letters (A–Z)'
      if (v.length < 2)                return 'Name must be at least 2 characters'
      if (v.length > 50)               return 'Name must be no longer than 50 characters'
    }

    if (name === 'lastName') {
      if (!v)                          return 'Last name is required'
      if (!/^[A-Za-z\s'-]+$/.test(v)) return 'Last name can only contain letters (A–Z)'
      if (v.length < 2)                return 'Last name must be at least 2 characters'
      if (v.length > 50)               return 'Last name must be no longer than 50 characters'
    }

    if (name === 'phone') {
      if (!v)                               return 'Phone number is required'
      if (!/^\+?[\d\s\-()]+$/.test(v))      return 'Only digits, spaces, +, - and () allowed'
      if (v.replace(/\D/g, '').length < 7)  return 'Enter a valid phone number (min 7 digits)'
      if (v.replace(/\D/g, '').length > 15) return 'Phone number is too long'
    }

    return ''
  }

  const validateAddressField = (name, value) => {
    const v = value.trim()

    if (name === 'moveFrom' || name === 'moveTo') {
    if (!v)                                  return 'Address is required'
    if (v.length < 5)                        return 'Please enter a full address'
    if (v.length > 200)                      return 'Address is too long'
    if (!/^[A-Za-z0-9\s,.\-#/()]+$/.test(v)) return 'Address can only contain letters (A–Z)'
    if (!/\d/.test(v))                       return 'Address should include a street number'
  }

    return ''
  }

  const PERSONAL_FIELDS = ['firstName', 'lastName', 'phone']
  const ADDRESS_FIELDS  = ['moveFrom', 'moveTo']  

  const set = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }))
    if (PERSONAL_FIELDS.includes(field)) {
      if (touched[field]) {
        setErrors((p) => ({ ...p, [field]: validatePersonalField(field, value) }))
      }
    } else if (ADDRESS_FIELDS.includes(field)) {  
      if (touched[field]) {
        setErrors((p) => ({ ...p, [field]: validateAddressField(field, value) }))
      }
    } else {
      if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }))
    }
  }

  const handlePersonalBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({
      ...prev,
      [field]: validatePersonalField(field, form[field]),
    }))
  }

  const handleAddressBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({
      ...prev,
      [field]: validateAddressField(field, form[field]),
    }))
  }

  const validateStep = (s) => {
    const e = {}
    if (s === 1) {
      if (!form.moveDate)   e.moveDate   = 'Required'
      if (!form.pickupTime) e.pickupTime = 'Required'
      if (!form.moveType)   e.moveType   = 'Required'
    }
    if (s === 2) {
      const mfErr = validateAddressField('moveFrom', form.moveFrom)
      const mtErr = validateAddressField('moveTo',   form.moveTo)
      if (mfErr) e.moveFrom = mfErr
      if (mtErr) e.moveTo   = mtErr
      if (!form.fromAccess) e.fromAccess = 'Required'
      if (!form.toAccess)   e.toAccess   = 'Required'
    }
    if (s === 3) {
      const fnErr = validatePersonalField('firstName', form.firstName)
      const lnErr = validatePersonalField('lastName',  form.lastName)
      const phErr = validatePersonalField('phone',     form.phone)
      if (fnErr) e.firstName = fnErr
      if (lnErr) e.lastName  = lnErr
      if (phErr) e.phone     = phErr

      if (!form.email.trim())                                    e.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'

      if (!form.heardFrom) e.heardFrom = 'Required'
    }
    return e
  }

  const next = () => {
    if (step === 2) {
      setTouched((prev) => ({ ...prev, moveFrom: true, moveTo: true }))
    }
    const e = validateStep(step)
    if (Object.keys(e).length) { setErrors(e); return }
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
    setTouched({ firstName: true, lastName: true, phone: true, moveFrom: true, moveTo: true })
    const e = validateStep(3)
    if (Object.keys(e).length) { setErrors(e); return }
    setStatus('loading')
    try {
      // 🔥 Uncomment when Firebase is connected:
      // await addDoc(collection(db, 'quoteRequests'), {
      //   ...form,
      //   createdAt: serverTimestamp(),
      //   source: window.location.href,
      // })
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('success')
      setTouched({})
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('idle')
    }
  }

  // ── Shared styles ────────────────────────────────────
  const inputClass = (field) => `
    w-full px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-xl border
    text-sm sm:text-base lg:text-lg outline-none
    transition-all duration-200 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green
    bg-white dark:bg-[#2c2c2c] text-graphite dark:text-white
    placeholder:text-[#9ca3af] dark:placeholder:text-[#6b6b6b]
    ${errors[field] ? 'border-red-400' : 'border-[#e5e7eb] dark:border-[#3a3a3a]'}
  `

  const selectClass = (field) => `
    w-full px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-xl border
    text-sm sm:text-base lg:text-lg outline-none appearance-none cursor-pointer
    transition-all duration-200 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green
    bg-white dark:bg-[#2c2c2c] text-graphite dark:text-white
    ${errors[field] ? 'border-red-400' : 'border-[#e5e7eb] dark:border-[#3a3a3a]'}
  `

  const Label = ({ text, required }) => (
    <label className="block text-sm sm:text-base lg:text-lg font-medium text-graphite dark:text-white mb-2">
      {text} {required && <span className="text-brand-green">*</span>}
    </label>
  )

  const Err = ({ field }) => errors[field]
    ? <p className="text-xs sm:text-sm text-red-400 mt-1.5">{errors[field]}</p>
    : null

  const SelectArrow = () => (
    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] pointer-events-none"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )

  const PillGroup = ({ field, options }) => (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mt-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => set(field, opt)}
          className={`
            w-full sm:w-auto
            px-4 py-3 sm:py-2 rounded-xl border
            text-sm sm:text-base font-medium
            min-h-11 sm:min-h-0
            transition-all duration-200
            ${form[field] === opt
              ? 'border-brand-green bg-brand-green/10 text-brand-green'
              : 'border-[#e5e7eb] dark:border-[#3a3a3a] text-[#6b7280] dark:text-[#a0a0a0] hover:border-brand-green hover:text-brand-green'
            }
          `}
        >
          {opt}
        </button>
      ))}
    </div>
  )

  return (
    <section
      className="min-h-[80vh] py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: t.bg.section }}
    >
      <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">

        {status === 'success' ? (
          /* ── Success ── */
          <div className="text-center">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ backgroundColor: 'rgba(25,173,87,0.12)' }}
            >
              <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-brand-green"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite dark:text-white mb-4">
              Quote Request Sent!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-10 mx-auto max-w-lg text-[#6b7280] dark:text-[#a0a0a0]">
              Thank you, <span className="font-semibold text-graphite dark:text-white">{form.firstName}</span>!
              We'll review your move details and get back to you shortly.
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
            {/* ── Progress header ── */}
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
                      <div className={`
                        h-1.5 sm:h-2 rounded-full flex-1 transition-all duration-500
                        ${done || current ? 'bg-brand-green' : 'bg-[#e5e7eb] dark:bg-[#3a3a3a]'}
                      `} />
                      {i < STEPS.length - 1 && (
                        <div className={`
                          h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full shrink-0 transition-all duration-500
                          ${done ? 'bg-brand-green' : 'bg-[#e5e7eb] dark:bg-[#3a3a3a]'}
                        `} />
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="hidden sm:flex justify-between mt-2">
                {STEPS.map((label, i) => (
                  <span key={i}
                    className={`text-xs font-medium transition-colors duration-300 ${i + 1 <= step
                      ? 'text-brand-green'
                      : 'text-[#9ca3af] dark:text-[#6b6b6b]'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Step content ── */}

            {step === 1 && (
              <div className="flex flex-col gap-7 sm:gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <Label text="Estimated move date" required />
                    <DatePickerInput
                      value={form.moveDate}
                      onChange={(val) => set('moveDate', val)}
                      hasError={!!errors.moveDate}
                    />
                    <Err field="moveDate" />
                  </div>
                  <div>
                    <Label text="Preferred pick up time" required />
                    <div className="relative">
                      <select value={form.pickupTime}
                        onChange={(e) => set('pickupTime', e.target.value)}
                        className={selectClass('pickupTime')}>
                        <option value="">Choose an option</option>
                        {TIME_SLOTS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                      <SelectArrow />
                    </div>
                    <Err field="pickupTime" />
                  </div>
                </div>

                <div>
                  <Label text="Type of move" required />
                  <div className="relative">
                    <select value={form.moveType}
                      onChange={(e) => set('moveType', e.target.value)}
                      className={selectClass('moveType')}>
                      <option value="">Choose an option</option>
                      {MOVE_TYPES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <SelectArrow />
                  </div>
                  <Err field="moveType" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-7 sm:gap-8">
                {/* Pick up */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-green uppercase tracking-wide mb-4">
                    Pick Up Address
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <Label text="Address" required />
                      <input type="text" value={form.moveFrom}
                        placeholder="Enter full address with zip code"
                        onChange={(e) => set('moveFrom', e.target.value)}
                        onBlur={() => handleAddressBlur('moveFrom')}
                        className={inputClass('moveFrom')} />
                      <p className="text-xs sm:text-sm text-[#9ca3af] mt-1.5">
                        *Please include the zip code
                      </p>
                      <Err field="moveFrom" />
                    </div>
                    <div>
                      <Label text="Type of access" required />
                      <div className="relative">
                        <select value={form.fromAccess}
                          onChange={(e) => set('fromAccess', e.target.value)}
                          className={selectClass('fromAccess')}>
                          <option value="">Choose an option</option>
                          {ACCESS_TYPES.map((a) => <option key={a}>{a}</option>)}
                        </select>
                        <SelectArrow />
                      </div>
                      <Err field="fromAccess" />
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-[#e5e7eb] dark:bg-[#3a3a3a]" />

                {/* Drop off */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-green uppercase tracking-wide mb-4">
                    Drop Off Address
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <Label text="Address" required />
                      <input type="text" value={form.moveTo}
                        placeholder="Enter full address with zip code"
                        onChange={(e) => set('moveTo', e.target.value)}
                        onBlur={() => handleAddressBlur('moveTo')}
                        className={inputClass('moveTo')} />
                      <p className="text-xs sm:text-sm text-[#9ca3af] mt-1.5">
                        *Please include the zip code
                      </p>
                      <Err field="moveTo" />
                    </div>
                    <div>
                      <Label text="Type of access" required />
                      <div className="relative">
                        <select value={form.toAccess}
                          onChange={(e) => set('toAccess', e.target.value)}
                          className={selectClass('toAccess')}>
                          <option value="">Choose an option</option>
                          {ACCESS_TYPES.map((a) => <option key={a}>{a}</option>)}
                        </select>
                        <SelectArrow />
                      </div>
                      <Err field="toAccess" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-6 sm:gap-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label text="First Name" required />
                    <input type="text" value={form.firstName} placeholder="First name"
                      onChange={(e) => set('firstName', e.target.value)}
                      onBlur={() => handlePersonalBlur('firstName')}
                      className={inputClass('firstName')} />
                    <Err field="firstName" />
                  </div>
                  <div>
                    <Label text="Last Name" required />
                    <input type="text" value={form.lastName} placeholder="Last name"
                      onChange={(e) => set('lastName', e.target.value)}
                      onBlur={() => handlePersonalBlur('lastName')}
                      className={inputClass('lastName')} />
                    <Err field="lastName" />
                  </div>
                </div>

                <div>
                  <Label text="Phone Number" required />
                  <input type="tel" value={form.phone} placeholder="+1 (555) 000-0000"
                    onChange={(e) => set('phone', e.target.value)}
                    onBlur={() => handlePersonalBlur('phone')}
                    className={inputClass('phone')} />
                  <Err field="phone" />
                </div>

                <div>
                  <Label text="Email" required />
                  <input type="email" value={form.email} placeholder="you@example.com"
                    onChange={(e) => set('email', e.target.value)}
                    className={inputClass('email')} />
                  <Err field="email" />
                </div>

                <div>
                  <Label text="How did you hear about Parsley Moving?" required />
                  <div className="relative">
                    <select value={form.heardFrom}
                      onChange={(e) => set('heardFrom', e.target.value)}
                      className={selectClass('heardFrom')}>
                      <option value="">Choose an option</option>
                      {HEAR_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                    <SelectArrow />
                  </div>
                  <Err field="heardFrom" />
                </div>

                <div>
                  <Label text="Additional information" />
                  <textarea rows={4} value={form.notes}
                    placeholder="Any details about your move — special items, floor numbers, etc."
                    onChange={(e) => set('notes', e.target.value)}
                    style={{ resize: 'vertical' }}
                    className={inputClass('notes')} />
                </div>
              </div>
            )}

            {/* ── Navigation buttons ── */}
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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                      <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
  )
}