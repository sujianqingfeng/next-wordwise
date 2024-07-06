'use client'

import { deleteWords } from '@/actions/word'
import { WordItemResp } from '@/api/types'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { TrashIcon } from '@radix-ui/react-icons'

interface DeleteButtonProps {
  row: WordItemResp
}
export default function DeleteButton(props: DeleteButtonProps) {
  const { row } = props
  const { toast } = useToast()

  const onDelete = async () => {
    await deleteWords(row.word)
    toast({
      title: 'delete word success'
    })
  }

  return (
    <Button variant="ghost" onClick={onDelete}>
      <TrashIcon />
    </Button>
  )
}
