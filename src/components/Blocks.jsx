const Blocks = ({number, numPredicate}) => {
  
  const blocks = [];
  const predicate = [];
  for(let i = 0; i <= number; i++) blocks.push(i)
  numPredicate.map(num => {
    if(blocks.includes(num)) {
      predicate.push(num)
    }
  })
  
  const addBlockPredicate = e => {
    console.log(predicate)
  }
  return(
    <>
      {
        blocks.map((numContent) => {
          const numBlock = numContent + 1
          return (
            <button
            key={numBlock}
            className={
              predicate.includes(numBlock) ? "tr__blocks Active"
              : "tr__blocks"
            }
            onClick={addBlockPredicate}
            >{numBlock}</button>
          )
        })
      }
    </>
  )
}
export { Blocks }