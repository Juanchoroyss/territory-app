import { Blocks } from "./Blocks"
import './styles/Territory.css'

const Territory = ({props}) => {
  const {
    id,
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
        <form>
          <label htmlFor="date">
            <span>Fecha en la que se predico</span>
            <input type="date" id="date"/>
          </label>
          <label htmlFor="captain">
            <span>Nombre del capitan</span>
            <input id="captain" type="text" placeholder="Ej: Gonzalo Gutierrez"/>
          </label>
          <section className="tr--all-blocks">
            <h2 className="tr--text-block">Manzanas del territorio</h2>
            <div className="tr--color-indicator">
              <p>Sin predicar</p>
              <p>Predicado</p>
            </div>
            <section className="tr--blocks-container">
              <Blocks number={territoryBlocks} numPredicate={predicate}/>
            </section>
          </section>
          <label htmlFor="observations">
            <span>Observaciones</span>
            <textarea name="" id="observations" cols="30" rows="10"></textarea>
          </label>
        </form>
      </section>
    </section>
  )
}

export { Territory }