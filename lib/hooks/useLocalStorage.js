import { useState, useEffect, useRef } from "react"

function useLocalStorage(initialValue, key) {
  const keyRef = useRef(key)
  const firstRender = useRef(false)
  const [state, setState] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storageValue =
      typeof window !== "undefined" ? window.localStorage.getItem(key) : ""
    if (storageValue) setState(JSON.parse(storageValue))
    setIsLoading(false)
  }, [key])

  useEffect(() => {
    if (!firstRender.current) return

    const previousKey = keyRef.current
    if (previousKey !== key) {
      window.localStorage.removeItem(previousKey)
    }
    keyRef.current = key
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  useEffect(() => {
    firstRender.current = true
  }, [])

  return { state, setState, isLoading }
}

export { useLocalStorage }
