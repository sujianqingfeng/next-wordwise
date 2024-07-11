'use server'

import type { Engine, Translator } from '@/api/validations'
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

export async function fetchUpdateEngine({ engine, ...config }: Engine) {
  return serverRequestPut('/profile/engine', {
    engine,
    config
  })
}
