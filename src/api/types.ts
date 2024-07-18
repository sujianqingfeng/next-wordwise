import { z } from 'zod'
import { ChangePwdSchema } from './validations'

export type PageParams = {
  page: number
  pageSize: number
}

export type BaseResp<T> = {
  data: T
  page: number
  pageSize: number
  total: number
  totalPage: number
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
  openAIKey?: string
  defaultTranslation: 'deepL' | 'volcano' | 'openAI'
}

// word
export type WordPageParams = PageParams

export type WordItemResp = {
  id: string
  word: string
  simpleTranslation: string
}
export type WordsResp = BaseResp<WordItemResp[]>

export type WordCalendarResp = {
  [key: string]: {
    count: number
  }
}

export type ChangePwdFormValues = z.infer<typeof ChangePwdSchema>

type TranslatorDeepLResp = {
  config: {
    deepLKey: string
  }
}

export type TranslatorResp = null | TranslatorDeepLResp

type EngineDeepSeekResp = {
  config: {
    apiKey: string
  }
}
export type EngineResp = null | EngineDeepSeekResp
