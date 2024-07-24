import { Ms_Madi } from 'next/font/google'

const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] })

export default function Logo() {
  return (
    <div
      className={`flex items-center text-[32px] font-bold ${msMadi.className}`}
    >
      <span className="text-pink-400">W</span>
      ordwise
    </div>
  )
}
