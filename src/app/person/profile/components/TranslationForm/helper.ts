import { z } from 'zod'

export const FormSchema = z
  .object({
    defaultTranslation: z.enum(['deepL', 'volcano']),
    deepLAuthKey: z.string().optional(),
    volcanoAccessKeyId: z.string().optional(),
    volcanoSecretKey: z.string().optional()
  })
  .refine(
    (data) => {
      if (data.defaultTranslation === 'deepL') {
        return !!data.deepLAuthKey
      }
      return true
    },
    {
      message: 'deepLAuthKey is required',
      path: ['deepLAuthKey']
    }
  )
  .refine(
    (data) => {
      if (data.defaultTranslation === 'volcano') {
        return !!data.volcanoAccessKeyId
      }
      return true
    },
    {
      message: 'volcanoAccessKeyId is required',
      path: ['volcanoAccessKeyId']
    }
  )
  .refine(
    (data) => {
      if (data.defaultTranslation === 'volcano') {
        return !!data.volcanoSecretKey
      }
      return true
    },
    {
      message: 'volcanoSecretKey is required',
      path: ['volcanoSecretKey']
    }
  )

export type FormValues = z.infer<typeof FormSchema>
export type Item = {
  name: Exclude<keyof FormValues, 'defaultTranslation'>
  label: string
}
export type Key = FormValues['defaultTranslation']

export const TranslationProviders = [
  {
    provider: 'deepL'
  },
  {
    provider: 'volcano'
  }
]

export function getCurrentProviderForms(provider: Key) {
  const forms: Record<Key, Item[]> = {
    deepL: [
      {
        name: 'deepLAuthKey',
        label: 'DeepL Auth Key'
      }
    ],
    volcano: [
      {
        name: 'volcanoAccessKeyId',
        label: 'Volcano Access Key Id'
      },
      {
        name: 'volcanoSecretKey',
        label: 'Volcano Secret Key'
      }
    ]
  }

  return forms[provider] || []
}
