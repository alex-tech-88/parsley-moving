import { useState } from 'react'
import GetQuoteButton from '@components/ui/GetQuoteButton'
import RequestCallButton from '@components/ui/RequestCallButton'

export default function ContactForm() {
  
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

  return (
    <div className="w-full min-w-0">

      {/* Heading */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-graphite dark:text-white mb-1">
          Get a Free Quote
        </h2>
        <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#a0a0a0]">
          Guaranteed all-inclusive quote within minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3">

        <input
          type="text"
          name="from"
          placeholder="Moving from address"
          value={form.from}
          onChange={handleChange}
          required
          className={inputClass}
        />

        <input
          type="text"
          name="to"
          placeholder="Moving to address"
          value={form.to}
          onChange={handleChange}
          required
          className={inputClass}
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 sm:mt-2 gap-2 sm:gap-4">

          <GetQuoteButton className="w-full sm:flex-1 text-sm sm:text-base" />

          <div className="flex items-center gap-3 sm:contents">
            <span className="hidden sm:block text-[#d1d5db] dark:text-[#3a3a3a] select-none shrink-0">|</span>
            <div className="sm:hidden w-full h-px bg-[#e5e7eb] dark:bg-[#3a3a3a]" />
          </div>

          <RequestCallButton className="w-full sm:flex-1 text-sm sm:text-base" />

        </div>
      </form>
    </div>
  )
}
