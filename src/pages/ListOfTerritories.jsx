import { CardTerritory } from "../components/CardTerritory"
import { Headers} from '../components/Headers'

const ListOfTerritories = ({territories}) => {
  return (
    <>
      <Headers/>
      <CardTerritory territories={territories}/>
    </>
  )
}
export { ListOfTerritories }