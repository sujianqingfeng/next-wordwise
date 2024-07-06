'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { ChangePwdFormValues } from '@/api/types'
import { ChangePwdSchema } from '@/api/validations'
import { changePwd } from '@/actions/profile'

export default function ChangePwd() {
  const [loading, setLoading] = useState(false)

  const form = useForm<ChangePwdFormValues>({
    resolver: zodResolver(ChangePwdSchema)
  })

  const onSubmit = async (data: ChangePwdFormValues) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
    setLoading(true)
    try {
      await changePwd(data)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="please input password" {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New password</FormLabel>
              <FormControl>
                <Input
                  placeholder="please input new password"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  placeholder="please input confirm password"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-2" type="submit">
          {loading && <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  )
}
