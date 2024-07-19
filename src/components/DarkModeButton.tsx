'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

function DarkModeButton() {
  const { setTheme, theme } = useTheme()
  const toggleThemeMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleThemeMode}>
      {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  )
}

export default DarkModeButton
