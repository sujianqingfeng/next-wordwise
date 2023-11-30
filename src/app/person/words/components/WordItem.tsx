'use client'

import type { WordItemResp } from '@/api/types'
import Image from 'next/image'
import Trash from 'icons/trash.svg'

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
        <Image src={Trash} alt="delete" width={20} height={20} />
      </button>
    </div>
  )
}
