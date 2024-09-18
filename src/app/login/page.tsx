import Logo from '~/components/Logo'
import { Button } from '~/components/ui/button'
import Link from 'next/link'

export default async function LoginPage() {
  return (
    <>
      <header className="h-[60px] md:h-[100px] text-slate-700 dark:text-slate-200">
        <div className="h-full px-4 max-w-7xl mx-auto flex justify-start items-center">
          <Logo />
        </div>
      </header>

      <div className="flex justify-center items-center max-w-7xl mx-auto px-2 pt-10">
        <Link
          href="/auth/google"
          className="w-full md:w-[300px] flex items-center justify-center"
        >
          <Button className="w-full flex items-center justify-center gap-2">
            Google Auth
          </Button>
        </Link>
      </div>
    </>
  )
}
