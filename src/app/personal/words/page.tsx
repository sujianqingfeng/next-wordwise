'use client'

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
import type { PageParams, WordItemResp, WordsResp } from '@/api/types'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

function WordsPage() {
  const [words, setWords] = useState<WordsResp>()
  const [pageParams, setPageParams] = useState<PageParams>({
    page: 1,
    pageSize: 10
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWords(pageParams)
      console.log('🚀 ~ fetchData ~ data:', data)
      setWords(data)
    }

    fetchData()
  }, [pageParams])

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
          {words?.data.map((word) => (
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

      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default WordsPage
