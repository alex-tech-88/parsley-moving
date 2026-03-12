import { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { theme } from '../theme/theme'

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem('parsley-theme') || 'light'
  )

  const t = theme[mode]

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', mode === 'dark')
    localStorage.setItem('parsley-theme', mode)
  }, [mode])

  const toggleTheme = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ mode, t, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
