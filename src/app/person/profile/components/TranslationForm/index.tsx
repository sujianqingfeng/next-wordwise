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

type TranslationFormProps = {
  profile: FormValues
}
export default function TranslationForm(props: TranslationFormProps) {
  const { profile } = props
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: profile
  })

  const values = form.getValues()
  const providerForms = getCurrentProviderForms(values.defaultTranslation)

  const onSubmit = (data: FormValues) => {
    console.log('🚀 ~ file: TranslationForm.tsx:73 ~ onSubmit ~ data:', data)
    const requiredData = providerForms
      .map((item) => item.name)
      .reduce(
        (pre, key) => {
          pre[key] = data[key]!
          return pre
        },
        {
          defaultTranslation: data.defaultTranslation
        } as Record<string, string>
      )
    console.log(
      '🚀 ~ file: TranslationForm.tsx:126 ~ onSubmit ~ requiredData:',
      requiredData
    )
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        ></FormField>

        {providerForms.map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input placeholder={item.label} {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        ))}

        <Button className="mt-2" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
