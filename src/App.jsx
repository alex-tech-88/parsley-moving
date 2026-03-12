import { useTheme } from '@context/useTheme'
import Navbar from '@components/layout/Navbar'

export default function App() {
  const { mode } = useTheme()

  return (
    <div className={mode}>
      <div className="bg-white dark:bg-[#1a1a1a] text-graphite dark:text-[#f5f5f5] min-h-screen transition-colors duration-300">
        <Navbar />
        <main style={{ paddingTop: 'var(--navbar-height)' }}>
          <h1 className="text-brand-green text-4xl font-bold">
            Parsley Moving — Your Trusted Moving Partner in the San Francisco Bay Area
          </h1>
        </main>
      </div>
    </div>
  )
}
