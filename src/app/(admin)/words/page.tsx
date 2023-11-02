'use client'

import { fetchDeleteWordApi, fetchWordsApi } from '@/api'
import WordItem from './components/WordItem'
import { useState, useEffect } from 'react'
import { WordItemResp } from '@/api/types'

export default function Page() {
  const [words, setWords] = useState<WordItemResp[]>([])

  const fetchWords = async () => {
    const words = await fetchWordsApi()
    setWords(words)
  }

  const onDelete = async (item: WordItemResp) => {
    const res = await fetchDeleteWordApi(item.word)
    console.log('🚀 ~ file: page.tsx:18 ~ onDelete ~ res:', res)
    fetchWords()
  }

  useEffect(() => {
    fetchWords()
  }, [])

  return (
    <div>
      {words.map((word) => (
        <WordItem key={word.id} item={word} onDelete={onDelete} />
      ))}
    </div>
  )
}
