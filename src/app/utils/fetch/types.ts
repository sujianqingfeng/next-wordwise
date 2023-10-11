export type AuthProvidersItemResp = {
  provider: string
  authUrl: string
}

export type AuthReq =  {
  code: string
  provider: string
}