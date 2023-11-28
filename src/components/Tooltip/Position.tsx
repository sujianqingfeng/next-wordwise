import { useClientRect } from '@/hooks/use-client-rect'
import { usePlacement } from '@/hooks/use-placement'
import { useRef } from 'react'

type PositionProps = {
  triggerRef: React.RefObject<HTMLElement>
  content?: string
}
export default function Position(props: PositionProps) {
  const { content, triggerRef } = props

  const tooltipRef = useRef<HTMLDivElement>(null)
  const [triggerRect] = useClientRect(triggerRef)
  const [tooltipRect] = useClientRect(tooltipRef)

  const position = usePlacement({ triggerRect, contentRect: tooltipRect })

  return (
    <div
      ref={tooltipRef}
      style={{ top: position.top, left: position.left }}
      className="fixed top-0 bg-gray-900 text-white text-[10px] rounded-md px-2 py-1"
    >
      {content}
    </div>
  )
}
