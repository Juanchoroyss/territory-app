import { useState, useEffect } from 'react'
import './styles/CardTerritory.css'

const CardTerritory = () => {

  const [ territories, setTerritories ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/territories')
    .then (response => response.json())
    .then (data => setTerritories(data))
  })

  return (
    territories.map(territory => {
      const { territoryName, id } = territory
      const firstLetter = territoryName.charAt(0)

      return (
        <div className='card' key={id}>
          <div className='card__container'>
            <p className='card__letter'>{firstLetter}</p>
            <p className='card__p'>{territoryName}</p>
          </div>
          <a className='card__aBtn' href={territoryName.toLowerCase()}>ver</a>
        </div>
      )
    })
  )
}

export { CardTerritory }