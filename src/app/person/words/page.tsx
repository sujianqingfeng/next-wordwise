'use client'

import { fetchDeleteWordApi, fetchWordsApi } from '@/api'
import WordItem from './components/WordItem'
import type { WordItemResp, WordPageReq } from '@/api/types'
import { useFetchList } from '@/hooks/use-fetch'

export default function Page() {
  const { result: words } = useFetchList<WordItemResp[], WordPageReq>({
    apiFn: fetchWordsApi,
    defaultQuery: {
      skip: 1
    },
    defaultValue: []
  })

  const onDelete = async (item: WordItemResp) => {
    const res = await fetchDeleteWordApi(item.word)
    console.log('🚀 ~ file: page.tsx:18 ~ onDelete ~ res:', res)
    // fetchWordList()
  }

  return (
    <div>
      {words.map((word) => (
        <WordItem key={word.id} item={word} onDelete={onDelete} />
      ))}
    </div>
  )
}
