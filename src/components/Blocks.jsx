import { useState } from "react";

const Blocks = ({number, numPredicate}) => {
  
  const [predicate, setPredicate] = useState([]);
  const blocks = Array(number).fill(null);
  if(predicate.length <= 0) {
    setPredicate(numPredicate)
  }
  
  const addBlockPredicate = e => {
    console.log(predicate)
    const thisBtn = e.target
    const numBtn = parseInt(thisBtn.textContent)

    if (predicate.includes(numBtn)) {
      const removeNum = predicate.filter(num => num !== numBtn)
      setPredicate(removeNum)
    } else {
      setPredicate([...predicate, numBtn])
    }
  }
  return(
    <>
      {
        blocks.map((_, numContent) => {
          const numBlock = numContent + 1
          return (
            <button
              key={numBlock}
              className={
                predicate.includes(numBlock) ? "tr__blocks active"
                : "tr__blocks"
              }
              onClick={addBlockPredicate}
              >{numBlock}
            </button>
          )
        })
      }
    </>
  )
}
export { Blocks }