import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValut] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoredValut(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return[ storedValue, setValue ]
}

export { useLocalStorage }