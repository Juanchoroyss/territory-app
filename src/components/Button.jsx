import { useLocalStorage } from "../customHooks/uselocalStorage"

const Button = () => {
  
  const sendDataDB = e => {
    e.preventDefault()
  }

  return (
    <button onClick={sendDataDB}>
      Guardar
    </button>
  )
}

export { Button }