import { z } from 'zod'

export const FormSchema = z
  .object({
    defaultTranslation: z.enum(['deepL', 'volcano', 'openAI']),
    deepLAuthKey: z.string().optional(),
    volcanoAccessKeyId: z.string().optional(),
    volcanoSecretKey: z.string().optional(),
    openAIKey: z.string().optional()
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
  .refine(
    (data) => {
      if (data.defaultTranslation === 'openAI') {
        return !!data.openAIKey
      }
      return true
    },
    {
      message: 'openAIKey is required',
      path: ['openAIKey']
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
  },
  {
    provider: 'openAI'
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
    ],
    openAI: [
      {
        name: 'openAIKey',
        label: 'OpenAI Key'
      }
    ]
  }

  return forms[provider] || []
}
