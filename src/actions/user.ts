'use server'

import type { UserResp } from '~/api/types'
import { serverRequestGet } from '~/utils/request'

export async function fetchUser() {
  return serverRequestGet<UserResp>('/user')
}
