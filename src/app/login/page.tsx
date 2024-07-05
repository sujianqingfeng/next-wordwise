import Logo from '@/components/Logo'
import { SERVER_HOST, CURRENT_HOST } from '@/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export const dynamic = 'force-dynamic'

export default async function LoginPage() {
  const googleAuthUrl = `${SERVER_HOST}/api/auth/google?redirectUrl=${encodeURIComponent(
    `${CURRENT_HOST}/auth/google`
  )}`

  return (
    <>
      <header className="h-[60px] md:h-[100px] text-slate-700 dark:text-slate-200">
        <div className="h-full px-2 max-w-7xl mx-auto flex justify-start items-center">
          <Logo></Logo>
        </div>
      </header>

      <div className="flex justify-center items-center max-w-7xl mx-auto px-2 pt-10">
        <Link
          href={googleAuthUrl}
          className="w-full md:w-[300px] flex items-center justify-center"
        >
          <Button className="w-full flex items-center justify-center gap-2">
            <FcGoogle />
            Google Auth
          </Button>
        </Link>
      </div>
    </>
  )
}
