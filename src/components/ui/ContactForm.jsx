import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddressInput from '@components/ui/AddressInput'
import GetQuoteButton from '@components/ui/GetQuoteButton'
import RequestCallButton from '@components/ui/RequestCallButton'

export default function ContactForm() {
  const [form, setForm]         = useState({ from: '', to: '' })
  const [hint, setHint]         = useState('')
  const [showHint, setShowHint] = useState(false)
  const navigate = useNavigate()

  const inputBase = `
    w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border
    text-sm sm:text-base transition-colors duration-200
    bg-white dark:bg-[#2c2c2c] text-graphite dark:text-white
    placeholder:text-[#9ca3af] dark:placeholder:text-[#6b6b6b]
    focus:outline-none focus:border-brand-green dark:focus:border-brand-green
  `

  const getInputClass = (field) => {
    const hasError = showHint && (hint === 'both' || hint === field)
    return `${inputBase} ${hasError
      ? 'border-red-400 dark:border-red-400'
      : 'border-[#e5e7eb] dark:border-[#3a3a3a]'
    }`
  }

  const handleGetQuote = () => {
    const missingFrom = !form.from.trim()
    const missingTo   = !form.to.trim()

    if (missingFrom || missingTo) {
      setHint(missingFrom && missingTo ? 'both' : missingFrom ? 'from' : 'to')
      setShowHint(true)
      setTimeout(() => setShowHint(false), 4000)
      return
    }

    setShowHint(false)
    const params = new URLSearchParams({ from: form.from, to: form.to })
    navigate(`/quote?${params.toString()}`)
  }

  const fromError = showHint && (hint === 'both' || hint === 'from')
  const toError   = showHint && (hint === 'both' || hint === 'to')

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

        <div className="flex flex-col gap-1">
          <AddressInput
            name="from"
            value={form.from}
            onChange={(e) => {
              setForm((p) => ({ ...p, from: e.target.value }))
              if (showHint) setShowHint(false)
            }}
            onSelect={(val) => {
              setForm((p) => ({ ...p, from: val }))
              if (showHint) setShowHint(false)
            }}
            placeholder="Moving from address"
            hasError={fromError}
            inputClassName={getInputClass('from')}
          />
          {fromError && (
            <p className="text-xs text-red-400 flex items-center gap-1 pl-1">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Enter your pickup address
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <AddressInput
            name="to"
            value={form.to}
            onChange={(e) => {
              setForm((p) => ({ ...p, to: e.target.value }))
              if (showHint) setShowHint(false)
            }}
            onSelect={(val) => {
              setForm((p) => ({ ...p, to: val }))
              if (showHint) setShowHint(false)
            }}
            placeholder="Moving to address"
            hasError={toError}
            inputClassName={getInputClass('to')}
          />
          {toError && (
            <p className="text-xs text-red-400 flex items-center gap-1 pl-1">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Enter your drop-off address
            </p>
          )}
        </div>

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

        {showHint && hint === 'both' && (
          <p className="text-xs text-center text-[#6b7280] dark:text-[#a0a0a0] mt-1">
            Please enter both pickup and drop-off addresses
          </p>
        )}

      </div>
    </div>
  )
}