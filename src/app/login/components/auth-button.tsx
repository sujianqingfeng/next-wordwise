import Image from 'next/image'
import google from 'icons/google.svg'
import type { AuthProvidersItemResp } from '@/api/types'
import Link from 'next/link'

export default function AuthButton(props: AuthProvidersItemResp) {
  const { authUrl } = props

  return (
    <Link href={authUrl}>
      <button className="flex items-center justify-start gap-2 bg-slate-600 p-2 rounded-md">
        <Image src={google} alt="google" />
        Google Auth
      </button>
    </Link>
  )
}
