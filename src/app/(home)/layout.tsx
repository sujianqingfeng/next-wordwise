import Link from 'next/link'
import Logo from '@/components/Logo'
import DarkModeButton from '@/components/DarkModeButton'
import Footer from './components/Footer'

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="h-[60px] xl:h-[100px] text-slate-700 dark:text-slate-200">
        <div className="px-2 xl:px-0 max-w-7xl mx-auto h-full flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex justify-start items-center gap-2">
            <DarkModeButton />
            <Link href="/login">
              <button className="bg-slate-400 p-2 rounded-md">Login</button>
            </Link>
          </div>
        </div>
      </header>
      {children}
      <Footer />
    </>
  )
}
