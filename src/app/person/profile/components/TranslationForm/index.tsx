'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  FormSchema,
  getCurrentProviderForms,
  type FormValues,
  TranslationProviders
} from './helper'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useToast } from '@/components/ui/use-toast'
import { updateTranslation } from '@/actions/profile'
import type { ProfileResp } from '@/api/types'
import { useState } from 'react'

type TranslationFormProps = {
  profile: FormValues
}
export default function TranslationForm(props: TranslationFormProps) {
  const { profile } = props
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      defaultTranslation: profile.defaultTranslation || 'deepL',
      deepLAuthKey: profile.deepLAuthKey || '',
      volcanoAccessKeyId: profile.volcanoAccessKeyId || '',
      volcanoSecretKey: profile.volcanoSecretKey || ''
    }
  })

  const values = form.getValues()
  const providerForms = getCurrentProviderForms(values.defaultTranslation)

  const onSubmit = async (data: FormValues) => {
    const requiredData = providerForms
      .map((item) => item.name)
      .reduce(
        (pre, key) => {
          pre[key] = data[key]!
          return pre
        },
        {
          defaultTranslation: data.defaultTranslation
        } as ProfileResp
      )

    try {
      setLoading(true)
      await updateTranslation(requiredData)
      toast({
        title: 'update translation profile success'
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'update translation profile failed',
        description: (error as Error).message
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="defaultTranslation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Default translation provider</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={profile[field.name]}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="select a translation provider"></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TranslationProviders.map((item) => (
                    <SelectItem key={item.provider} value={item.provider}>
                      {item.provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {providerForms.map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input placeholder={item.label} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        ))}

        <Button className="mt-2" type="submit">
          {loading && <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  )
}
