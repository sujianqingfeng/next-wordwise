'use client'

import { fetchTranslator, fetchUpdateTranslator } from '@/actions/profile'
import {
  type DeepLTranslator,
  DeepLInsertTranslatorSchema
} from '@/api/validations'
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
import { useEffect, useState } from 'react'

const translator = 'deepL'

export default function DeepLTranslator() {
  const [loading, setLoading] = useState(false)
  const form = useForm<DeepLTranslator>({
    resolver: zodResolver(DeepLInsertTranslatorSchema),
    defaultValues: {
      deepLKey: '',
      translator
    }
  })

  const onSubmit = async (data: DeepLTranslator) => {
    setLoading(true)
    await fetchUpdateTranslator(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTranslator(translator).then((res) => {
      if (res) {
        form.setValue('deepLKey', res.config.deepLKey)
      }
    })
  }, [form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="deepLKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Auth Key</FormLabel>
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
