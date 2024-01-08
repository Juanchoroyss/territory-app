import { Blocks } from './Blocks'
import { LabelIn } from './LabelIn'

const Form = ({territoryBlocks, predicate}) => {
  return (
    <form>
      <LabelIn 
        type={'date'} 
        text={'Fecha en la que se predico'}
        id={'fecha'}
      />
      <LabelIn 
        text={'Nombre del Capitan'}
        id={'Captain'} 
      />
      <section className="tr--all-blocks">
        <h2 className="tr--text-block">Manzanas del territorio</h2>
        <div className="tr--color-indicator">
          <p>Sin predicar</p>
          <p>Predicado</p>
        </div>
        <section className="tr--blocks-container">
          <Blocks 
          number={territoryBlocks} 
          numPredicate={predicate}/>
        </section>
      </section>
      <label htmlFor="observations">
        <span>Observaciones</span>
        <textarea name="" id="observations" cols="30" rows="10"></textarea>
      </label>
    </form>
  )
}

export { Form }