const Blocks = ({number}) => {
  let blocks = []
  for(let i = 1; i <= number; i++) {
    const button = <button>{i}</button>
    blocks.push(button)
  }
  return blocks
}
export { Blocks }