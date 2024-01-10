import './styles/Forms.css'
import { Blocks } from './Blocks'
import { LabelIn } from './LabelIn'

const Form = ({territoryBlocks, predicate}) => {
  return (
    <form className='fr--labels'>
      <div>
        <LabelIn 
          type={'date'} 
          text={'Fecha de predicacion'}
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
        <label className='ll--form textarea' htmlFor="observations">
          <span className='ll--span'>Observaciones</span>
          <textarea className='ll--input' id="observations" rows="8"></textarea>
        </label>
      </div>
    </form>
  )
}

export { Form }