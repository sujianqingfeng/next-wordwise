import { z } from 'zod'

export const ChangePwdSchema = z
  .object({
    password: z.string().optional(),
    newPassword: z.string().min(6).max(20),
    confirmPassword: z.string().min(6).max(20)
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })

export const DeepLTranslatorSchema = z.object({
  deepLKey: z.string().min(1),
  translator: z.enum(['deepL'])
})

export type DeepLTranslator = z.infer<typeof DeepLTranslatorSchema>
export type Translator = DeepLTranslator

export const DeepSeekEngineSchema = z.object({
  apiKey: z.string().min(1),
  engine: z.enum(['deepSeek'])
})

export type DeepSeekEngine = z.infer<typeof DeepSeekEngineSchema>
export type Engine = DeepSeekEngine
