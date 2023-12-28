import type {
  AuthProvidersItemResp,
  AuthReq,
  ProfileResp,
  Token,
  UserResp,
  WordCalendarResp,
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

// user
export const fetchUserApi = (opt?: RequestInit) => {
  return fetchJsonByGet<UserResp>('/user', '', opt)
}

// profile

export const fetchProfileApi = () => {
  return fetchJsonByGet<ProfileResp>('/profile')
}

export const fetchUpdateProfileApi = (data: ProfileResp) => {
  return fetchJsonByPut('/profile', data)
}

export const fetchUpdateTranslationProfileApi = (data: ProfileResp) => {
  return fetchJsonByPut('/profile/translation', data)
}

// word
export const fetchWordsApi = (query: WordPageReq) => {
  return fetchJsonByGet<WordItemResp[]>('/word/list', query)
}

export const fetchDeleteWordApi = (word: string) => {
  return fetchJsonByDelete('/word', { word })
}

export const fetchYearCalendarWordApi = (opt?: RequestInit) => {
  return fetchJsonByGet<WordCalendarResp>('/word/year-calendar', '', opt)
}
