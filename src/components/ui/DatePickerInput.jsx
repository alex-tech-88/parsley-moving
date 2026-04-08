import { useState, useRef, useEffect } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'

export default function DatePickerInput({ value, onChange, hasError = false, label, required }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  // Parse string → Date for DayPicker
  const selected = value ? new Date(value + 'T00:00:00') : undefined

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (date) => {
    if (!date) return
    // Convert back to YYYY-MM-DD string
    const iso = date.toLocaleDateString('en-CA') // en-CA = YYYY-MM-DD
    onChange(iso)
    setOpen(false)
  }

  const displayValue = selected
    ? selected.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div ref={wrapRef} className="relative">

      {/* Trigger input */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`
          w-full px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-xl border
          text-sm sm:text-base lg:text-lg text-left
          transition-all duration-200
          bg-white dark:bg-[#2c2c2c]
          flex items-center justify-between gap-2
          ${hasError
            ? 'border-red-400'
            : open
              ? 'border-brand-green ring-2 ring-brand-green/20'
              : 'border-[#e5e7eb] dark:border-[#3a3a3a]'
          }
        `}
      >
        <span className={displayValue ? 'text-graphite dark:text-white' : 'text-[#9ca3af] dark:text-[#6b6b6b]'}>
          {displayValue || 'Select move date'}
        </span>

        {/* Calendar icon */}
        <svg className={`w-5 h-5 shrink-0 transition-colors ${open ? 'text-brand-green' : 'text-[#9ca3af]'}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      </button>

      {/* Calendar dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 rounded-2xl border shadow-xl overflow-hidden
          bg-white dark:bg-[#2c2c2c]
          border-[#e5e7eb] dark:border-[#3a3a3a]
          left-0 sm:left-auto"
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelect}
            disabled={{ before: today }}
            showOutsideDays
            classNames={{
              root:            'p-4',
              months:          'relative',
              month_caption:   'flex items-center justify-center font-semibold text-base text-graphite dark:text-white h-10 mb-2',
              nav:             'absolute inset-x-0 top-0 flex justify-between items-center h-10 px-1',
              button_previous: 'flex items-center justify-center w-9 h-9 rounded-xl hover:bg-[#f3f4f6] dark:hover:bg-[#383838] transition-colors',
              button_next:     'flex items-center justify-center w-9 h-9 rounded-xl hover:bg-[#f3f4f6] dark:hover:bg-[#383838] transition-colors',
              chevron:         'w-4 h-4 fill-[#9ca3af]',
              weekdays:        'grid grid-cols-7 mb-1',
              weekday:         'flex items-center justify-center w-9 h-9 text-xs font-medium text-[#9ca3af] dark:text-[#6b6b6b]',
              weeks:           'space-y-0.5',
              week:            'grid grid-cols-7',
              day:             'flex items-center justify-center w-9 h-9 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-150 text-graphite dark:text-white hover:bg-[#f3f4f6] dark:hover:bg-[#383838]',
              selected:        '!bg-brand-green !text-white hover:!bg-brand-green/90',
              today:           'font-bold border border-brand-green/40 text-brand-green',
              outside:         'text-[#d1d5db] dark:text-[#4a4a4a]',
              disabled:        'text-[#d1d5db] dark:text-[#4a4a4a] cursor-not-allowed opacity-50',
              hidden:          'invisible',
            }}
          />
        </div>
      )}
    </div>
  )
}