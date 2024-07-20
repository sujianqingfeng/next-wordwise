import { useLayoutEffect, useMemo, useState } from 'react'

export function useClientRect(elRef: React.RefObject<HTMLElement | null>) {
  const [clientRect, setClientRect] = useState<DOMRect | null>(null)

  const updateClientRect = useMemo(() => {
    return () => {
      setClientRect(elRef.current!.getBoundingClientRect())
    }
  }, [elRef])

  useLayoutEffect(() => {
    if (elRef.current) {
      updateClientRect()
    }
  }, [updateClientRect, elRef])

  return [clientRect, updateClientRect] as [
    typeof clientRect,
    typeof updateClientRect
  ]
}
