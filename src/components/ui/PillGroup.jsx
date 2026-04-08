export default function PillGroup({ options, value, onChange }) {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mt-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={[
            'w-full sm:w-auto',
            'px-4 py-3 sm:py-2 rounded-xl border',
            'text-sm sm:text-base font-medium',
            'min-h-11 sm:min-h-0',
            'transition-all duration-200',
            value === opt
              ? 'border-brand-green bg-brand-green/10 text-brand-green'
              : 'border-[#e5e7eb] dark:border-[#3a3a3a] text-[#6b7280] dark:text-[#a0a0a0] hover:border-brand-green hover:text-brand-green',
          ].join(' ')}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}