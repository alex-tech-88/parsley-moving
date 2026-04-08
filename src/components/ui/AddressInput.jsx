import { useState, useRef, useEffect } from 'react'
import { useAddressAutocomplete } from '@hooks/useAddressAutocomplete'

export default function AddressInput({
  name,
  value,
  onChange,
  onSelect,
  placeholder = 'Enter address',
  className = '',
  inputClassName = '',
  hasError = false,
}) {
  const [open, setOpen]       = useState(false)
  const [focused, setFocused] = useState(false)
  const wrapRef = useRef(null)

  const { suggestions, loading, fetchSuggestions, clear } = useAddressAutocomplete()

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
        clear()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [clear])

  const handleChange = (e) => {
    onChange(e)
    fetchSuggestions(e.target.value)
    setOpen(true)
  }

  const handleSelect = (feature) => {
    const address = feature.place_name
    onSelect(address)
    setOpen(false)
    clear()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { setOpen(false); clear() }
  }

  const showDropdown = open && focused && (suggestions.length > 0 || loading)

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={() => { setFocused(true); if (value.length >= 3) setOpen(true) }}
        onBlur={() => setFocused(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        className={inputClassName}
        aria-autocomplete="list"
        aria-expanded={showDropdown}
      />

      {/* Spinner inside input */}
      {loading && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <span className="w-4 h-4 border-2 border-brand-green/30 border-t-brand-green rounded-full animate-spin block" />
        </div>
      )}

      {/* Dropdown */}
      {showDropdown && (
        <ul
          role="listbox"
          className="absolute z-50 w-full mt-1 rounded-xl border overflow-hidden shadow-lg
            bg-white dark:bg-[#2c2c2c]
            border-[#e5e7eb] dark:border-[#3a3a3a]"
        >
          {loading && suggestions.length === 0 ? (
            <li className="px-4 py-3 text-sm text-[#9ca3af] dark:text-[#6b6b6b]">
              Searching...
            </li>
          ) : (
            suggestions.map((feature) => (
              <li
                key={feature.id}
                role="option"
                onMouseDown={(e) => { e.preventDefault(); handleSelect(feature) }}
                className="flex items-start gap-3 px-4 py-3 cursor-pointer
                  text-sm text-graphite dark:text-white
                  hover:bg-[#f3f4f6] dark:hover:bg-[#383838]
                  transition-colors duration-150
                  border-b border-[#f3f4f6] dark:border-[#383838] last:border-0"
              >
                {/* Pin icon */}
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-green" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="leading-snug">{feature.place_name}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}