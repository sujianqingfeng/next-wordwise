'use client'

import Image from 'next/image'
import google from '../../../../public/icons/google.svg'

export default function AuthButton() {
  const onAuth = () => {
    const clientId =
      '215567912027-msrunvjb8q3t7oq939deaoi7eb5r2s89.apps.googleusercontent.com'
    const redirectUrl = 'http://localhost:3000/api/auth/google'
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=openid%20email`
    window.location.href = url
  }

  return (
    <button
      onClick={onAuth}
      className="flex items-center justify-start gap-2 bg-slate-600 p-2 rounded-2"
    >
      <Image src={google} alt="google" />
      Google Auth
    </button>
  )
}
