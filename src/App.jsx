import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
