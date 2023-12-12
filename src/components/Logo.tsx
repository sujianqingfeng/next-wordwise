import { Baloo_Thambi_2 } from 'next/font/google'

const baloo = Baloo_Thambi_2({ subsets: ['latin'] })

export default function Logo() {
  return (
    <div
      className={`flex items-center text-[32px] font-bold ${baloo.className}`}
    >
      <span className="text-primary-color">W</span>
      ordWise
    </div>
  )
}
