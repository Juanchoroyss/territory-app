import { useState, useEffect } from 'react'


const useGetTerritories = url => {

  const [ territories, setTerritories ] = useState([])
  
  useEffect(() => {
    fetch(url)
    .then (response => response.json())
    .then (data => setTerritories(data))
  })
  return territories
}

export { useGetTerritories }