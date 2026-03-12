import { useTheme } from './context/useTheme'

export default function App() {
  const { mode, toggleTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-[#1a1a1a] text-graphite dark:text-[#f5f5f5] min-h-screen transition-colors duration-300">
      <div className="p-8 flex items-center gap-4">
        <h1 className="text-brand-green text-4xl font-bold">
          Parsley Moving 🌿
        </h1>
        <button
          onClick={toggleTheme}
          className="bg-brand-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-green-hover transition-colors"
        >
          {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </div>
  )
}
