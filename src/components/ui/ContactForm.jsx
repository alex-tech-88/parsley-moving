import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddressInput from '@components/ui/AddressInput'
import GetQuoteButton from '@components/ui/GetQuoteButton'
import RequestCallButton from '@components/ui/RequestCallButton'
import FormField from '@components/ui/FormField'
import { getAddressError } from '@utils/validation'

export default function ContactForm() {
  const [form,    setForm]    = useState({ from: '', to: '' })
  const [errors,  setErrors]  = useState({ from: '', to: '' })
  const [touched, setTouched] = useState({ from: false, to: false })
  const navigate = useNavigate()

  const inputBase = [
    'w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border',
    'text-sm sm:text-base transition-colors duration-200',
    'bg-white dark:bg-[#2c2c2c] text-graphite dark:text-white',
    'placeholder:text-[#9ca3af] dark:placeholder:text-[#6b6b6b]',
    'focus:outline-none focus:border-brand-green dark:focus:border-brand-green',
  ].join(' ')

  const getInputClass = (field) =>
    `${inputBase} ${
      errors[field]
        ? 'border-red-400 dark:border-red-400'
        : 'border-[#e5e7eb] dark:border-[#3a3a3a]'
    }`

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }))
    if (touched[field]) {
      setErrors((p) => ({ ...p, [field]: getAddressError(value) }))
    }
  }

  const handleBlur = (field) => {
    setTouched((p) => ({ ...p, [field]: true }))
    setErrors((p) => ({ ...p, [field]: getAddressError(form[field]) }))
  }

  const handleGetQuote = () => {
    setTouched({ from: true, to: true })
    const fromErr = getAddressError(form.from)
    const toErr   = getAddressError(form.to)
    setErrors({ from: fromErr, to: toErr })
    if (fromErr || toErr) return

    const params = new URLSearchParams({ from: form.from, to: form.to })
    navigate(`/quote?${params.toString()}`)
  }

  return (
    <div className="w-full min-w-0">

      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-graphite dark:text-white mb-1">
          Get a Free Quote
        </h2>
        <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#a0a0a0]">
          Guaranteed all-inclusive quote within minutes.
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">

        <FormField error={errors.from}>
          <AddressInput
            name="from"
            value={form.from}
            onChange={(e) => handleChange('from', e.target.value)}
            onSelect={(val) => handleChange('from', val)}
            onBlur={() => handleBlur('from')}
            placeholder="Moving from address"
            hasError={!!errors.from}
            inputClassName={getInputClass('from')}
          />
        </FormField>

        <FormField error={errors.to}>
          <AddressInput
            name="to"
            value={form.to}
            onChange={(e) => handleChange('to', e.target.value)}
            onSelect={(val) => handleChange('to', val)}
            onBlur={() => handleBlur('to')}
            placeholder="Moving to address"
            hasError={!!errors.to}
            inputClassName={getInputClass('to')}
          />
        </FormField>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 sm:mt-2 gap-2 sm:gap-4">
          <GetQuoteButton
            onClick={handleGetQuote}
            className="w-full sm:flex-1 text-sm sm:text-base"
          />
          <div className="flex items-center gap-3 sm:contents">
            <span className="hidden sm:block text-[#d1d5db] dark:text-[#3a3a3a] select-none shrink-0">|</span>
            <div className="sm:hidden w-full h-px bg-[#e5e7eb] dark:bg-[#3a3a3a]" />
          </div>
          <RequestCallButton className="w-full sm:flex-1 text-sm sm:text-base" />
        </div>
        
      </div>
    </div>
  )
}