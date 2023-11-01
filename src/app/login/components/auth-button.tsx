'use client'

import Image from 'next/image'
import google from '../../../../public/icons/google.svg'
import type { AuthProvidersItemResp } from '@/api/types'

export default function AuthButton(props: AuthProvidersItemResp) {
  const onAuth = () => {
    window.location.href = props.authUrl
  }

  return (
    <button
      onClick={onAuth}
      className="flex items-center justify-start gap-2 bg-slate-600 p-2 rounded-md"
    >
      <Image src={google} alt="google" />
      Google Auth
    </button>
  )
}
