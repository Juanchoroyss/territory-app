import { Form } from './Form'
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
        <Form 
        territoryBlocks={territoryBlocks} 
        predicate={predicate}/>
      </section>
    </section>
  )
}

export { Territory }