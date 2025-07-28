'use client'

import { fetchEngine, fetchUpdateEngine } from '~/actions/profile'
import { type OpenAIEngine, OpenAIEngineSchema } from '~/api/validations'
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
import { RotateCw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useToast } from '~/components/ui/use-toast'

const engine = 'openai'

export default function OpenAIEngine() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const form = useForm<OpenAIEngine>({
    resolver: zodResolver(OpenAIEngineSchema),
    defaultValues: {
      apiKey: '',
      engine
    }
  })

  const onSubmit = async (data: OpenAIEngine) => {
    setLoading(true)
    await fetchUpdateEngine(data)
    setLoading(false)
    toast({
      title: 'update engine success'
    })
  }

  useEffect(() => {
    fetchEngine(engine).then((res) => {
      if (res) {
        form.setValue('apiKey', res.config.apiKey)
      }
    })
  }, [form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Api Key</FormLabel>
              <FormControl>
                <Input placeholder="api key" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading && <RotateCw size={12} className="mr-2 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
