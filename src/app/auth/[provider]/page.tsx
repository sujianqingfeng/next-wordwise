'use client'

import { fetchAuthApi } from '@/api'
import { useFetch } from '@/hooks/use-fetch'
import { useRouter } from 'next/navigation'

export default function Page({
  params,
  searchParams
}: {
  params: { provider: string }
  searchParams: { code: string }
}) {
  const { provider } = params
  const { code } = searchParams
  const router = useRouter()

  useFetch({
    apiFn: fetchAuthApi,
    defaultQuery: {
      provider,
      code
    },
    defaultValue: {},
    successCallback() {
      router.push('/person/dashboard')
    }
  })

  return <div>{provider} auth loading...</div>
}
