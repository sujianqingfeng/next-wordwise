import Logo from '@/components/Logo'
import Link from 'next/link'

function Header() {
  return (
    <header className="h-[60px] md:h-[100px] text-slate-700 dark:text-slate-200">
      <div className="px-4 max-w-7xl mx-auto h-full flex justify-between items-center">
        <Logo />
        <div className="flex justify-start items-center gap-4">
          <Link className="hidden md:inline-block" href="/login">
            <button className="bg-slate-400 px-2 py-1 rounded-md">Login</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
