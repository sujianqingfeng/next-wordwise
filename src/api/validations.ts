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
