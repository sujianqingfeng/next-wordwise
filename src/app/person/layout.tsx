import Logo from '@/components/Logo'
import { TheHeader } from './components/TheHeader'
import { TheNav } from './components/TheNav'

const links = ['dashboard', 'words', 'profile'].map((s) => ({
  href: `/person/${s}`,
  label: s.charAt(0).toUpperCase() + s.slice(1)
}))

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
          <TheNav links={links} />
        </div>
      </div>
      <div className="flex-auto">
        <TheHeader links={links} />
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}
