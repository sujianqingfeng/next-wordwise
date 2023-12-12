import { useToggle } from '@/hooks/use-basic'
import { useRef, useState } from 'react'

export type TooltipProps = {
  children?: React.ReactNode
  content?: string
  trigger?: 'hover'
}

export function useTooltip(props: TooltipProps) {
  const { trigger = 'hover', content } = props
  const [isOpen, open, close] = useToggle()
  const triggerRef = useRef<HTMLElement>(null)

  const getTriggerProps = () => {
    const triggerProps: React.HTMLAttributes<HTMLElement> & {
      ref: React.Ref<HTMLElement>
    } = {
      ref: triggerRef
    }

    if (trigger === 'hover') {
      triggerProps.onMouseEnter = () => {
        open()
      }
      triggerProps.onMouseLeave = () => {
        close()
      }
    }

    return triggerProps
  }

  return {
    getTriggerProps,
    triggerRef,
    isOpen,
    content
  }
}
