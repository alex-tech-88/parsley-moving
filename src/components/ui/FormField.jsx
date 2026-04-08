export default function FormField({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="block text-sm sm:text-base font-medium text-graphite dark:text-white mb-1">
          {label} {required && <span className="text-brand-green">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-xs sm:text-sm text-red-400 mt-1 flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}