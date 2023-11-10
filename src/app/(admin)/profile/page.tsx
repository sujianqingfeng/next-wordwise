'use client'

import type { ProfileResp } from '@/api/types'
import { useForm } from 'react-hook-form'
import { fetchProfileApi, fetchUpdateProfileApi } from '@/api'
import { useFetch } from '@/hooks/use-fetch'

export default function Page() {
  const { register, handleSubmit } = useForm<ProfileResp>()
  const { result: profile } = useFetch<ProfileResp>({
    apiFn: fetchProfileApi,
    defaultValue: {
      volcanoAccessKeyId: '',
      volcanoSecretKey: ''
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
        <div>
          <p>volcano access key id</p>
          <input
            className="text-2 border-2 border-gray-300 rounded-md w-[400px] outline-none px-1"
            placeholder="place input volcanoAccessKeyId"
            defaultValue={profile.volcanoAccessKeyId}
            {...register('volcanoAccessKeyId')}
          />
        </div>
        <div>
          <p>volcano secret key</p>
          <input
            className="text-2 border-2 border-gray-300 rounded-md w-[400px] outline-none px-1"
            placeholder="place input volcanoSecretKey"
            defaultValue={profile.volcanoSecretKey}
            {...register('volcanoSecretKey')}
          />
        </div>

        <input
          type="submit"
          className="bg-primary-color px-1 rounded-md mt-2"
        />
      </form>
    </>
  )
}
