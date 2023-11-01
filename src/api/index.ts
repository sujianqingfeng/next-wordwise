import type { AuthProvidersItemResp, ProfileResp } from './types'
import { fetchJsonByGet } from '@/utils/fetch'

export const fetchAuthProvidersApi = () => {
  return fetchJsonByGet<AuthProvidersItemResp[]>('/auth/providers')
}

export const fetchProfileApi = () => {
  return fetchJsonByGet<ProfileResp>('/profile')
}
