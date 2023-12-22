import './App.css'
import { CardTerritory } from './components/CardTerritory'

function App() {
  return (
    <>
      <header>
        <h1>Territorios</h1>
        <p>Sibaté</p>
      </header>
      <section className="territory">
        <CardTerritory />
      </section>
    </>
  )
}

export default App
