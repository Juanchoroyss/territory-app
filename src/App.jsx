import './App.css'
import { ListOfTerritories } from './pages/ListOfTerritories'
import { Routes, Route } from 'react-router-dom'
import { useGetTerritories } from './scripts/useGetTerritories'
import { Territory } from './components/Territory'

function App() {
  const territories = useGetTerritories('http://localhost:3000/territories')
  return (
    <>
      <section className="territories">
        <Routes>
          <Route path='/' element={<ListOfTerritories  territories={territories} />}/>
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
