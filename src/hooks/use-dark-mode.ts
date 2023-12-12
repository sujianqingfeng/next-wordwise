import { useEffect, useState } from 'react'

function getCurrentTheme() {
  if (typeof window !== 'undefined') {
    if (localStorage.theme) {
      return localStorage.theme === 'dark' ? 'dark' : 'light'
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
  }
  return 'light'
}

export function useDarkMode() {
  const [theme, setTheme] = useState(getCurrentTheme())

  const isDark = theme === 'dark'

  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleThemeMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { isDark, toggleThemeMode }
}
