import type {
  AuthProvidersItemResp,
  AuthReq,
  ProfileResp,
  Token,
  WordItemResp
} from './types'
import {
  fetchJsonByDelete,
  fetchJsonByGet,
  fetchJsonByPost
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

export const fetchWordsApi = () => {
  return fetchJsonByGet<WordItemResp[]>('/word/list')
}

export const fetchDeleteWordApi = (word: string) => {
  return fetchJsonByDelete('/word', { word })
}
