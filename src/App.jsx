import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenido a la Tienda del mas grande del inTerior' />
    </div>
  )
}

export default App
