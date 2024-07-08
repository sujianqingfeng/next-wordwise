'use server'

import type { Translator } from '@/api/validations'
import { serverRequestPut } from '@/utils/request'

export async function fetchUpdateTranslator({
  translator,
  ...config
}: Translator) {
  return serverRequestPut('/profile/translator', {
    translator,
    config
  })
}
