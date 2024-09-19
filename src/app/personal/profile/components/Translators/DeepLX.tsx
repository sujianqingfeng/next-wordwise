'use client'

import { fetchTranslator, fetchUpdateTranslator } from '~/actions/profile'
import { type DeepLTranslator, DeepLTranslatorSchema } from '~/api/validations'
import { Button } from '~/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { useToast } from '~/components/ui/use-toast'

const translator = 'deepLX'

export default function DeepLXTranslator() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<DeepLTranslator>({
    resolver: zodResolver(DeepLTranslatorSchema),
    defaultValues: {
      deepLKey: '',
      translator
    }
  })

  const onSubmit = async (data: DeepLTranslator) => {
    setLoading(true)
    await fetchUpdateTranslator(data)
    setLoading(false)
    toast({
      title: 'update translator success'
    })
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
            {loading && <LoaderCircle size={4} className="mr-2 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
