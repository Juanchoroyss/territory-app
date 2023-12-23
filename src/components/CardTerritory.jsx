import './styles/CardTerritory.css'
import { Link, } from 'react-router-dom'

const CardTerritory = ({territories}) => {
  
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
          <Link className='card__aBtn'to={territoryName.toLowerCase()}>ver</Link>
        </div>
      )
    })
  )
}

export { CardTerritory }