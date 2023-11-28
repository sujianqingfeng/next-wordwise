interface IUsePlacementProps {
  triggerRect: DOMRect | null
  contentRect: DOMRect | null
}

interface IPosition {
  left: number
  top: number
}

export function usePlacement({
  triggerRect,
  contentRect
}: IUsePlacementProps): IPosition {
  const position = {
    left: 0,
    top: 0
  }

  if (triggerRect && contentRect) {
    position.left =
      triggerRect.left + triggerRect.width / 2 - contentRect.width / 2
    position.top = triggerRect.top + triggerRect.height
  }

  return position
}
