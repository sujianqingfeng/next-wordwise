'use client'

import { ProfileResp } from '@/app/utils/fetch/types'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useFetch } from '@/app/hooks/use-fetch'

export default function Page() {
  const [profile, setProfile] = useState<ProfileResp>({
    volcanoAccessKeyId: '',
    volcanoSecretKey: ''
  })
  const { register, handleSubmit } = useForm<ProfileResp>()
  const { fetchJsonByGet, fetchJsonByPut } = useFetch()

  const onSubmit = async (data: ProfileResp) => {
    const res = await fetchJsonByPut('/profile', { ...profile, ...data })
    console.log('🚀 ~ file: page.tsx:19 ~ onSubmit ~ res:', res)
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await fetchJsonByGet<ProfileResp>('/profile')
      console.log('🚀 ~ file: page.tsx:24 ~ fetchProfile ~ profile:', profile)
      setProfile(profile)
    }
    fetchProfile()
  }, [])

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
