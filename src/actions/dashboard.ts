'use server'

import { WordCalendarResp } from '@/api/types'
import { serverRequestGet } from '@/utils/request'

export async function fetchYearCalendarWord() {
  return serverRequestGet<WordCalendarResp>('/word/year-calendar')
}
