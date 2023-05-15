import React from 'react'
import { useCartContext } from '../context/CartContext'
import './CartContainer.css'

const CartContainer = () => {
const {cartList, vaciarCarrito} = useCartContext()


  return (
    <div className='totali'>
        {cartList.map(producto => (
          <div className='cartview'>
            <img className='cartimg' src={producto.foto} />
            <div className='cartext'>
              <h2 className='nombrecart' >{producto.nombre}</h2>
              <h3>Cantidad: {producto.cantidad}</h3>
              <h3 className='preciocart' >{producto.precio}</h3>
            </div>
            <button className='kitar'>X</button>
          </div>  
        ))}
        <button className='btncards' onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer