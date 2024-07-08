'use client'

import { fetchUpdateTranslator } from '@/actions/profile'
import { type DeepLTranslator, DeepLTranslatorSchema } from '@/api/validations'
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
import { useForm } from 'react-hook-form'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function DeepLTranslator() {
  const [loading, setLoading] = useState(false)
  const form = useForm<DeepLTranslator>({
    resolver: zodResolver(DeepLTranslatorSchema),
    defaultValues: {
      deepLKey: '',
      translator: 'deepL'
    }
  })

  const onSubmit = async (data: DeepLTranslator) => {
    setLoading(true)
    await fetchUpdateTranslator(data)
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="deepLKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>AuthKey</FormLabel>
              <FormControl>
                <Input placeholder="auth key" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">
            {loading && <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
