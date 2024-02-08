import { z } from 'zod'
import { ChangePwdSchema } from './validations'

export type PageReq = {
  page: number
  size?: number
}

export type BaseResp<T> = {
  data: T
  hasNextPage: boolean
  hasPrevPage: boolean
  total: number
  totalPage: number
}

//

export type AuthProvidersItemResp = {
  provider: string
  authUrl: string
}

export type AuthReq = {
  code: string
  provider: string
}

export type Token = {
  token: string
}

// user

export type UserResp = {
  name: string
  email: string
  avatar?: string
}

// profile

export type ProfileResp = {
  id?: string
  userId?: string
  volcanoAccessKeyId?: string
  volcanoSecretKey?: string
  deepLAuthKey?: string
  defaultTranslation: 'deepL' | 'volcano'
}

// word
export type WordPageReq = PageReq

export type WordItemResp = {
  id: string
  word: string
  simpleTranslation: string
}

export type WordCalendarResp = {
  [key: string]: {
    count: number
  }
}

export type ChangePwdFormValues = z.infer<typeof ChangePwdSchema>
