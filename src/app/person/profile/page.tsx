'use client'

import type { ProfileResp } from '@/api/types'
import { useForm } from 'react-hook-form'
import { fetchProfileApi, fetchUpdateProfileApi } from '@/api'
import { useFetch } from '@/hooks/use-fetch'
import ProfileInput from './components/ProfileInput'

export default function Page() {
  const { register, handleSubmit } = useForm<ProfileResp>()
  const { result: profile } = useFetch<ProfileResp>({
    apiFn: fetchProfileApi,
    defaultValue: {
      volcanoAccessKeyId: '',
      volcanoSecretKey: '',
      deepLAuthKey: ''
    }
  })

  const onSubmit = async (data: ProfileResp) => {
    const res = await fetchUpdateProfileApi({ ...profile, ...data })
    console.log('🚀 ~ file: page.tsx:19 ~ onSubmit ~ res:', res)
  }

  return (
    <>
      <p>keys</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfileInput
          label="volcanoAccessKeyId"
          inputProps={{
            defaultValue: profile.volcanoAccessKeyId,
            ...register('volcanoAccessKeyId')
          }}
        />
        <ProfileInput
          label="volcanoSecretKey"
          inputProps={{
            defaultValue: profile.volcanoSecretKey,
            ...register('volcanoSecretKey')
          }}
        />
        <ProfileInput
          label="deepLAuthKey"
          inputProps={{
            defaultValue: profile.deepLAuthKey,
            ...register('deepLAuthKey')
          }}
        />

        <input
          type="submit"
          className="bg-primary-color px-1 rounded-md mt-2"
        />
      </form>
    </>
  )
}
