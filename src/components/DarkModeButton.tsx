'use client'

import { useDarkMode } from '@/hooks/use-dark-mode'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

function DarkModeButton() {
  const { isDark, toggleThemeMode } = useDarkMode()

  return (
    <button onClick={toggleThemeMode}>
      {isDark ? <IoSunnyOutline size={22} /> : <IoMoonOutline size={22} />}
    </button>
  )
}

export default DarkModeButton
