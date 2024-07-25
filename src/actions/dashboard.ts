'use server'

import type { TopQueryResp, WordCalendarResp } from '@/api/types'
import { serverRequestGet } from '@/utils/request'

export async function fetchYearCalendarWord() {
  return serverRequestGet<WordCalendarResp>('/dashboard/year-calendar')
}

export async function fetchTopQuery(type: '1' | '2' | '3') {
  return serverRequestGet<TopQueryResp>('/dashboard/top-query', { type })
}
