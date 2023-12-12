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
      <header className="h-[60px] md:h-[100px] text-slate-700 dark:text-slate-200">
        <div className="px-2 xl:px-0 max-w-7xl mx-auto h-full flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex justify-start items-center gap-2">
            <DarkModeButton />
            <Link className="hidden md:inline-block" href="/login">
              <button className="bg-slate-400 px-2 py-1 rounded-md">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="h-[calc(100vh-100px)] md:h-[calc(100vh-140px)]">
        {children}
      </div>
      <Footer />
    </>
  )
}
