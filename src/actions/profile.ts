'use server'

import { EngineResp, TranslatorResp } from '~/api/types'
import type { Engine, Translator } from '~/api/validations'
import { serverRequestGet, serverRequestPut } from '~/utils/request'

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

export async function fetchTranslator(translator: Translator['translator']) {
  return serverRequestGet<TranslatorResp>(`/profile/translator`, { translator })
}

export async function fetchEngine(engine: Engine['engine']) {
  return serverRequestGet<EngineResp>(`/profile/engine`, { engine })
}
