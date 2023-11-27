type TooltipProps = {
  children?: React.ReactNode
  content?: string
}

function ToolTip(props: TooltipProps) {
  const { children } = props

  return <>{children}</>
}

export default ToolTip
