'use client'

import type { WordItemResp } from '@/api/types'
import { MdDeleteOutline } from 'react-icons/md'

type WordItemProps = {
  item: WordItemResp
  onDelete: (item: WordItemResp) => void
}

export default function WordItem(props: WordItemProps) {
  const { item, onDelete } = props

  return (
    <div className="flex justify-between items-center">
      <div>{item.word}</div>
      <button onClick={() => onDelete(item)}>
        <MdDeleteOutline size={20} />
      </button>
    </div>
  )
}
