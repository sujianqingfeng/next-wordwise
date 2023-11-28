import { createPortal } from 'react-dom'

type PortalProps = {
  children: React.ReactNode
  container?: HTMLElement
}
export function Portal(props: PortalProps) {
  const { children, container = document.body } = props
  return createPortal(children, container)
}
