import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import * as z from 'zod'
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

export default function TranslationForm() {
  const FormSchema = z.object({
    defaultTranslation: z.string({
      required_error: 'Please select an translation provider.'
    })
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  return (
    <Form {...form}>
      <form>
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
                  <SelectItem value="ffff">ffff</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        ></FormField>

        <Button className="mt-2" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
