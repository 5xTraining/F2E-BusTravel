import { useState } from "react"

const useChangeSearchState = (initValue) => {
  const [isFocus, setIsFocus] = useState(initValue)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return { isFocus, handleFocus, handleBlur }
}

export { useChangeSearchState }
