'use client'

import { Children, cloneElement } from 'react'
import { type TooltipProps, useTooltip } from './use-tooltip'
import Position from './Position'
import { Portal } from '../Portal'

function ToolTip(props: TooltipProps) {
  const { children } = props
  const { getTriggerProps, isOpen, content, triggerRef } = useTooltip(props)

  let trigger: React.ReactElement
  try {
    const child = Children.only(children) as React.ReactElement
    trigger = cloneElement(child, getTriggerProps())
  } catch (error) {
    trigger = <span />
    console.error('Tooltip must have only one child element')
  }

  return (
    <>
      {trigger}

      {isOpen && (
        <Portal>
          <Position triggerRef={triggerRef} content={content} />,
        </Portal>
      )}
    </>
  )
}

export default ToolTip
