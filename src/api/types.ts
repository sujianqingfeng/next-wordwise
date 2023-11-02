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

export type ProfileResp = {
  id?: string
  userId?: string
  volcanoAccessKeyId: string
  volcanoSecretKey: string
}

export type WordItemResp = {
  id: string
  word: string
}
