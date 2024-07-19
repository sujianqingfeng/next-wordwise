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
import { fetchWords } from '@/actions/word'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

async function WordsPage({
  searchParams: { page = '1' }
}: {
  searchParams: { page?: string }
}) {
  const words = await fetchWords({ page: +page, pageSize: 10 })

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
            {words.page > 1 && words.totalPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/personal/words?page=${+page - 1}`}
                />
              </PaginationItem>
            )}

            {words.totalPage > 1 && words.page !== words.totalPage && (
              <PaginationItem>
                <PaginationNext href={`/personal/words?page=${+page + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default WordsPage
