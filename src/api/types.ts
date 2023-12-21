export type PageReq = {
  offset: number
  limit?: number
}

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
  volcanoAccessKeyId: string
  volcanoSecretKey: string
  deepLAuthKey: string
}

// word
export type WordPageReq = PageReq

export type WordItemResp = {
  id: string
  word: string
  simpleTranslate: string
}

export type WordCalendarResp = {
  [key: string]: {
    count: number
  }
}
