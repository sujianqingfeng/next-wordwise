'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

function DarkModeButton() {
  const { setTheme, theme } = useTheme()
  const toggleThemeMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleThemeMode}>
      {theme === 'dark' ? (
        <SunIcon width={22} height={22} />
      ) : (
        <MoonIcon width={22} height={22} />
      )}
    </button>
  )
}

export default DarkModeButton
