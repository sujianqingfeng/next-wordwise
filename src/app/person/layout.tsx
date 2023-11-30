import Logo from '@/components/Logo'
import { Nav } from './components/nav'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full flex justify-start">
      <div className="w-[200px] bg-gray-300">
        <header className="h-[100px] flex justify-center items-center">
          <Logo />
        </header>
        <div className="p-2">
          <Nav />
        </div>
      </div>
      <div className="flex-auto">
        <div className="p-2 text-lg font-bold">dash</div>
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}
