import type { AuthProvidersItemResp } from '@/api/types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function AuthButton(props: AuthProvidersItemResp) {
  const { authUrl } = props

  return (
    <Link
      href={authUrl}
      className="w-full md:w-[300px] flex items-center justify-center"
    >
      <Button className="w-full flex items-center justify-center gap-2">
        <FcGoogle />
        Google Auth
      </Button>
    </Link>
  )
}
