'use client'

import { useDarkMode } from '@/hooks/use-dark-mode'
import sun from 'icons/sun.svg'
import moon from 'icons/moon.svg'
import Image from 'next/image'

function DarkModeButton() {
  const { isDark, toggleThemeMode } = useDarkMode()

  return (
    <button onClick={toggleThemeMode}>
      {isDark ? (
        <Image src={sun} alt="theme mode" width={24} />
      ) : (
        <Image src={moon} alt="theme mode" width={24} />
      )}
    </button>
  )
}

export default DarkModeButton
