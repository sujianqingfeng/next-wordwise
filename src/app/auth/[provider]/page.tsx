'use client'

import { queryStringToObject } from '@/utils/basic'
// import { fetchAuthApi } from '@/api'
// import { useFetch } from '@/hooks/use-fetch'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthPage({
  params: { provider }
}: {
  params: { provider: string }
}) {
  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash
    const params = queryStringToObject(hash)
    console.log('🚀 ~ useEffect ~ params:', params)
    const { access_token } = params
  }, [router])

  // useFetch({
  //   apiFn: fetchAuthApi,
  //   defaultQuery: {
  //     provider,
  //     code
  //   },
  //   defaultValue: {},
  //   successCallback() {
  //     router.push('/person/dashboard')
  //   }
  // })

  return <div>{provider} auth loading...</div>
}
