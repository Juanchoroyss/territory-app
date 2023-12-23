import './App.css'
import { CardTerritory } from './components/CardTerritory'
import { Routes, Route } from 'react-router-dom'
import { useGetTerritories } from './scripts/useGetTerritories'
import { Headers } from './components/Headers'
import { Territory } from './components/Territory'

function App() {
  const territories = useGetTerritories('http://localhost:3000/territories')
  return (
    <>
      <Headers />
      <section className="territories">
        <Routes>
          <Route path='/' element={<CardTerritory  territories={territories} />}/>
          {
            territories.map(territory => {
              const {territoryName, id} = territory
              const url = territoryName.toLowerCase()

              return (
                <Route
                  key={id}
                  path={url} 
                  element={<Territory props={territory}/>}/>
              )
            })
          }
        </Routes>
      </section>
    </>
  )
}

export default App
