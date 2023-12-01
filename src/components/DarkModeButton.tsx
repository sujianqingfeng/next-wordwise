'use client'

import { useDarkMode } from '@/hooks/use-dark-mode'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

function DarkModeButton() {
  const { isDark, toggleThemeMode } = useDarkMode()

  return (
    <button onClick={toggleThemeMode}>
      {isDark ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
    </button>
  )
}

export default DarkModeButton
