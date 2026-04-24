import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useTheme } from '@context/useTheme'
import { PhoneIcon } from '@components/ui/icons'
import { PHONE } from '@/constant'
import { validatePersonal } from '@utils/validation'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


const initialState = { name: '', phone: '' }

export default function ContactPage() {
  const { t } = useTheme()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    if (name === 'name') return validatePersonal('firstName', value)
    if (name === 'phone') return validatePersonal('phone', value)
    return ''
  }

  const validate = () => ({
    name: validateField('name', form.name),
    phone: validateField('phone', form.phone),
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (status === 'error') setStatus('idle')

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setTouched({ name: true, phone: true })
    const validationErrors = validate()

    if (Object.values(validationErrors).some(Boolean)) {
      setErrors(validationErrors)
      return
    }

    if (!executeRecaptcha) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      await executeRecaptcha('request_call')

      await addDoc(collection(db, 'callRequests'), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        createdAt: serverTimestamp(),
        source: window.location.href,
      })

      setStatus('success')
      setForm(initialState)
      setErrors({})
      setTouched({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputStyle = {
    backgroundColor: t.bg.page,
    color: t.text.primary,
    borderColor: t.border,
  }

  return (
    <section
      className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: t.bg.section }}
    >
      <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {status === 'success' ? (
          <div
            className="rounded-2xl border p-10 sm:p-16 lg:p-20 text-center"
            style={{ backgroundColor: t.bg.card, borderColor: t.border, boxShadow: t.shadow }}
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
              style={{ backgroundColor: 'rgba(25, 173, 87, 0.12)' }}
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

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
              style={{ color: t.text.primary }}
            >
              Request Sent!
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10"
              style={{ color: t.text.secondary }}
            >
              Thank you! Your call-back request has been received.{' '}
              <span className="font-semibold text-brand-green">Please wait for our call.</span>{' '}
              We&apos;ll reach you shortly.
            </p>

            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 font-semibold text-brand-green hover:underline mb-8 text-base sm:text-lg lg:text-xl"
            >
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              {PHONE}
            </a>

            <div>
              <button
                onClick={() => setStatus('idle')}
                className="text-sm sm:text-base underline"
                style={{ color: t.text.secondary }}
              >
                Submit another request
              </button>
            </div>
          </div>
        ) : (
          <div
            className="rounded-2xl border p-8 sm:p-12 lg:p-16"
            style={{ backgroundColor: t.bg.card, borderColor: t.border, boxShadow: t.shadow }}
          >
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-lg sm:text-2xl lg:text-3xl font-medium leading-snug">
                <span className="text-brand-green font-bold">
                  We will give you a call back right away.
                </span>{' '}
                <span className="font-bold" style={{ color: t.text.primary }}>
                  Please enter your details below for a call back.
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 lg:gap-8 mb-7 sm:mb-9">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm sm:text-base lg:text-lg font-medium"
                    style={{ color: t.text.primary }}
                  >
                    First name: <span className="text-brand-green">*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="given-name"
                    style={{
                      ...inputStyle,
                      borderColor: touched.name && errors.name ? '#ef4444' : t.border,
                    }}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-xl border
                      text-sm sm:text-base lg:text-lg outline-none
                      transition-all duration-200 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                  />

                  {touched.name && errors.name && (
                    <p className="text-xs sm:text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm sm:text-base lg:text-lg font-medium"
                    style={{ color: t.text.primary }}
                  >
                    Phone number: <span className="text-brand-green">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="tel"
                    inputMode="tel"
                    style={{
                      ...inputStyle,
                      borderColor: touched.phone && errors.phone ? '#ef4444' : t.border,
                    }}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-xl border
                      text-sm sm:text-base lg:text-lg outline-none
                      transition-all duration-200 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                  />

                  {touched.phone && errors.phone && (
                    <p className="text-xs sm:text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              {status === 'error' && (
                <p className="text-sm sm:text-base text-red-400 text-center mb-4 sm:mb-6">
                  Something went wrong. Please call us at{' '}
                  <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="underline">
                    {PHONE}
                  </a>
                </p>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{ backgroundColor: t.brand.primary }}
                  className="inline-flex items-center justify-center gap-3 text-white
                    font-bold uppercase tracking-widest
                    text-sm sm:text-base lg:text-lg
                    px-10 sm:px-14 lg:px-16
                    py-4 sm:py-5 lg:py-5
                    rounded-xl hover:opacity-90 active:scale-[0.98]
                    transition-all duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      CALL ME BACK
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#9ca3af] dark:text-[#6b6b6b] mt-4">
                Protected by reCAPTCHA —{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-green transition-colors duration-200"
                >
                  Privacy Policy
                </a>{' '}
                &{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-green transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}