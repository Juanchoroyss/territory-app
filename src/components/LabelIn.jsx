import './styles/LabelIn.css'

const LabelIn = ({type = 'text', text, id}) => {
  return (
    <label className='ll--form' htmlFor={id}>
      <span className='ll--span'>{text}</span>
      <input className='ll--input' type={type} id={id}/>
    </label>
  )
}

export { LabelIn }