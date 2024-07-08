import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead
} from '@/components/ui/table'
import { ImportButton } from './components/ImportButton'
import DeleteButton from './components/DeleteButton'
import { useEffect, useState } from 'react'
import { fetchWords } from '@/actions/word'
import type { WordItemResp } from '@/api/types'

export default async function WordsPage() {
  const [words, setWords] = useState<WordItemResp[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWords()
      setWords(data.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="py-2 flex justify-end items-center">
        <ImportButton />
      </div>

      <Table className="border">
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
                <DeleteButton row={word} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
