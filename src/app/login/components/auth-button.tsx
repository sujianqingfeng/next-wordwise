import type { AuthProvidersItemResp } from '@/api/types'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function AuthButton(props: AuthProvidersItemResp) {
  const { authUrl } = props

  return (
    <Link href={authUrl}>
      <button className="flex items-center justify-start gap-2 bg-slate-600 p-2 rounded-md">
        <FcGoogle />
        Google Auth
      </button>
    </Link>
  )
}
