const LabelIn = ({type = 'text', text, id}) => {
  return (
    <label htmlFor={id}>
      <span>{text}</span>
      <input type={type} id={id}/>
    </label>
  )
}

export { LabelIn }