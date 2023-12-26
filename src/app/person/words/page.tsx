'use client'

import { fetchDeleteWordApi, fetchWordsApi } from '@/api'
import WordItem from './components/WordItem'
import type { WordItemResp, WordPageReq } from '@/api/types'
import { useFetchList } from '@/hooks/use-fetch'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead
} from '@/components/ui/table'
import { TrashIcon } from '@radix-ui/react-icons'

export default function Page() {
  const { result: words } = useFetchList<WordItemResp[], WordPageReq>({
    apiFn: fetchWordsApi,
    defaultQuery: {
      page: 1
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
      <Button>export</Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>word</TableHead>
            <TableHead>translation</TableHead>
            <TableHead className="w-100">operation</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {words.map((word) => (
            <TableRow key={word.id}>
              <TableCell>{word.word}</TableCell>
              <TableCell>{word.simpleTranslation}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => onDelete(word)}>
                  <TrashIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
