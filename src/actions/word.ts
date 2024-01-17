'use server'

import { fetchDeleteWordApi, fetchImportWordsApi } from '@/api'
import { revalidatePath } from 'next/cache'

export async function importWords(form: FormData) {
  await fetchImportWordsApi(form)
  revalidatePath('/person/words')
}

export async function deleteWords(word: string) {
  await fetchDeleteWordApi(word)
  revalidatePath('/person/words')
}
