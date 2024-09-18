'use client'

import { importWords } from '~/actions/word'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { useRef } from 'react'

export function ImportButton() {
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const onClick = () => {
    inputRef.current?.click()
  }
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    formRef.current?.requestSubmit()
  }

  return (
    <form ref={formRef} action={importWords}>
      <Input
        ref={inputRef}
        accept=".txt"
        name="file"
        type="file"
        className="hidden"
        onChange={onFileChange}
      />
      <Button type="button" onClick={onClick}>
        Import
      </Button>
    </form>
  )
}
