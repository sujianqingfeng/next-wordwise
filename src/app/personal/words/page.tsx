import { fetchWordsApi } from '@/api'

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

export default async function Page() {
  const { data } = await fetchWordsApi({
    page: 1
  })

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
          {data.map((word) => (
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
