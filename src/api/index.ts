import type {
  AuthProvidersItemResp,
  AuthReq,
  ProfileResp,
  Token,
  WordItemResp,
  WordPageReq
} from './types'

import {
  fetchJsonByDelete,
  fetchJsonByGet,
  fetchJsonByPost,
  fetchJsonByPut
} from '@/utils/fetch'

export const fetchAuthProvidersApi = () => {
  return fetchJsonByGet<AuthProvidersItemResp[]>('/auth/providers')
}

export const fetchAuthApi = (data: AuthReq) => {
  return fetchJsonByPost<Token>('/auth', data)
}

export const fetchProfileApi = () => {
  return fetchJsonByGet<ProfileResp>('/profile')
}

export const fetchUpdateProfileApi = (data: ProfileResp) => {
  return fetchJsonByPut('/profile', data)
}

export const fetchWordsApi = (query: WordPageReq) => {
  return fetchJsonByGet<WordItemResp[]>('/word/list', query)
}

export const fetchDeleteWordApi = (word: string) => {
  return fetchJsonByDelete('/word', { word })
}
