import { useEffect, useState } from 'react'
import { ThemeContext } from '@context/ThemeContext'
import { theme } from '@theme/theme'

function getInitialMode() {
  const savedMode = localStorage.getItem('parsley-theme')
  if (savedMode === 'light' || savedMode === 'dark') {
    return savedMode
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode)

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
