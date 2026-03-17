import { useState } from 'react'
import { useTheme } from '@context/useTheme'
import { PHONE } from '@/constants'

function PhoneIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1C10.61 22 2 13.39 2 3a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  )
}

export default function ContactForm() {
  const { t, mode } = useTheme()
  const [form, setForm] = useState({ from: '', to: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const inputClass = `
    w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl text-sm sm:text-base
    border transition-colors duration-200
    bg-white dark:bg-[#2c2c2c]
    text-graphite dark:text-white
    border-[#e5e7eb] dark:border-[#3a3a3a]
    placeholder:text-[#9ca3af] dark:placeholder:text-[#6b6b6b]
    focus:outline-none focus:border-brand-green dark:focus:border-brand-green
  `

  const callColor = mode === 'light' ? '#3b3b3b' : '#f5f5f5'

  return (
    <div className="w-full min-w-0">

      {/* Heading */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-graphite dark:text-white mb-1">
          Get a free quote
        </h2>
        <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#a0a0a0]">
          Guaranteed all-inclusive quote within minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3">

        {/* From address */}
        <input
          type="text"
          name="from"
          placeholder="Moving from address"
          value={form.from}
          onChange={handleChange}
          required
          className={inputClass}
        />

        {/* To address */}
        <input
          type="text"
          name="to"
          placeholder="Moving to address"
          value={form.to}
          onChange={handleChange}
          required
          className={inputClass}
        />

        {/* Actions — stacked on mobile, side by side on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 sm:mt-2 gap-2 sm:gap-4">

          {/* Get a Quote — full width on mobile */}
          <button
            type="submit"
            style={{ backgroundColor: t.brand.primary }}
            className="w-full sm:flex-1 hover:opacity-90 transition-opacity
              text-white font-semibold px-4 py-2.5 rounded-xl text-sm sm:text-base text-center cursor-pointer"
          >
            GET QUOTE
          </button>

          {/* Divider — horizontal on mobile, vertical on sm+ */}
          <div className="flex items-center gap-3 sm:contents">
            <span className="hidden sm:block text-[#d1d5db] dark:text-[#3a3a3a] select-none shrink-0">|</span>
            <div className="sm:hidden w-full h-px bg-[#e5e7eb] dark:bg-[#3a3a3a]" />
          </div>

          {/* Call link — full width on mobile */}
          <a
            href={`tel:${PHONE.replace(/\D/g, '')}`}
            style={{ color: callColor, borderColor: t.border }}
            className="w-full sm:flex-1 flex items-center justify-center gap-2
              border rounded-xl px-4 py-2.5
              hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5
              transition-all duration-200 text-sm font-semibold group"
          >
            <PhoneIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform duration-200" />
            REQUEST CALL
          </a>

        </div>
      </form>
    </div>
  )
}
