import { Blocks } from "./Blocks"
import './styles/Territory.css'

const Territory = ({props}) => {
  const { 
    territoryName, 
    territoryImg, 
    territoryBlocks,
    predicate
  } = props
  return (
    <section className="tr">
      <section className="tr--hero">
        <div className="tr--header">
          <h2 className="tr--h2">{territoryName}</h2>
        </div>
        <img className="tr--img" src={territoryImg} alt={`Imagen del territorio de ${territoryName}`} />
      </section>
      <section>
        <div className="tr--color-indicator">
          <p>Sin predicar</p>
          <p>Predicado</p>
        </div>
        <Blocks number={territoryBlocks}/>
      </section>
    </section>
  )
}

export { Territory }