import Link from 'next/link'
import Logo from '@/app/components/logo'

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="h-[100px] flex justify-center items-center">
        <div className="w-[70%] h-full flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div>
            <Link href="/login">
              <button className="bg-slate-400 p-2 rounded-md">Login</button>
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="h-2 text-center">footer</footer>
    </>
  )
}
