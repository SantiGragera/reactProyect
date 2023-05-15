import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
            <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='*' element={ <Navigate to='/' /> } />
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
