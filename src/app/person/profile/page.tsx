'use client'

import type { ProfileResp } from '@/api/types'
import { useForm } from 'react-hook-form'
import { fetchProfileApi, fetchUpdateProfileApi } from '@/api'
import { useFetch } from '@/hooks/use-fetch'
import { Button } from '@/components/ui/button'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import TranslationForm from './components/TranslationForm'

const FormSchema = z.object({
  volcanoAccessKeyId: z.string(),
  volcanoSecretKey: z.string(),
  deepLAuthKey: z.string()
})

export default function Page() {
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

  // const { register, handleSubmit } = useForm<ProfileResp>()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  return (
    <>
      <p className="text-lg font-bold">Translation providers</p>

      <TranslationForm></TranslationForm>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="volcanoAccessKeyId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>VolcanoAccessKeyId</FormLabel>
                <FormControl>
                  <Input placeholder="VolcanoAccessKeyId" {...field}></Input>
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="volcanoSecretKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>VolcanoSecretKey</FormLabel>
                <FormControl>
                  <Input placeholder="VolcanoSecretKey" {...field}></Input>
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="deepLAuthKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>DeepLAuthKey</FormLabel>
                <FormControl>
                  <Input placeholder="DeepLAuthKey" {...field}></Input>
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <Button className="mt-2" type="submit">
            submit
          </Button>
        </form>
      </Form>
    </>
  )
}
