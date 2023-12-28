'use client'

import type { ProfileResp } from '@/api/types'
import { fetchProfileApi, fetchUpdateProfileApi } from '@/api'
import { useFetch } from '@/hooks/use-fetch'
import TranslationForm from './components/TranslationForm'

export default function Page() {
  const { result: profile } = useFetch<ProfileResp>({
    apiFn: fetchProfileApi,
    defaultValue: {
      volcanoAccessKeyId: '',
      volcanoSecretKey: '',
      deepLAuthKey: '',
      defaultTranslation: 'deepL'
    }
  })

  return (
    <>
      <p className="text-lg font-bold">Translation providers</p>

      <TranslationForm profile={profile}></TranslationForm>
    </>
  )
}
