'use server'

import { fetchUpdateTranslationProfileApi } from '@/api'
import type { ProfileResp } from '@/api/types'

export async function updateTranslation(form: ProfileResp) {
  console.log('🚀 ~ updateTranslation ~ form:', form)
  await fetchUpdateTranslationProfileApi(form)
}
