import { useState } from 'react'

type UseToggleOptions = {
  defaultValue?: boolean
}
export function useToggle(options: UseToggleOptions = {}) {
  const { defaultValue = false } = options
  const [toggle, setToggle] = useState(defaultValue)

  const toggleTruthy = () => {
    setToggle(true)
  }

  const toggleFalsy = () => {
    setToggle(false)
  }

  return [toggle, toggleTruthy, toggleFalsy] as [
    typeof toggle,
    typeof toggleTruthy,
    typeof toggleFalsy
  ]
}
