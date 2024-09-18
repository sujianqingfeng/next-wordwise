'use server'

import { revalidatePath } from 'next/cache'
import {
  serverRequestDelete,
  serverRequestGet,
  serverRequestPost
} from '~/utils/request'
import { WordPageParams, WordsResp } from '~/api/types'

export async function importWords(form: FormData) {
  await serverRequestPost('/word/import', form)
  revalidatePath('/personal/words')
}

export async function deleteWords(word: string) {
  await serverRequestDelete('/word', { word })
  revalidatePath('/personal/words')
}

export async function fetchWords(params: WordPageParams) {
  return serverRequestGet<WordsResp>('/word/list', params)
}
