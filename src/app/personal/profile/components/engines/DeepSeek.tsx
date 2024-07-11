'use client'

import { fetchUpdateEngine } from '@/actions/profile'
import { type DeepSeekEngine, DeepSeekEngineSchema } from '@/api/validations'
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
import { RotateCw } from 'lucide-react'
import { useState } from 'react'

export default function DeepSeekEngine() {
  const [loading, setLoading] = useState(false)
  const form = useForm<DeepSeekEngine>({
    resolver: zodResolver(DeepSeekEngineSchema),
    defaultValues: {
      apiKey: '',
      engine: 'deepSeek'
    }
  })

  const onSubmit = async (data: DeepSeekEngine) => {
    setLoading(true)
    await fetchUpdateEngine(data)
    setLoading(false)
  }

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
