import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './CartContainer.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartContainer = () => {
const [dataForm, setDataForm] = useState({
  nombre: '',
  phone: '',
  email: '',
})

const {cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()

const generarOrden = (evt) =>{
  evt.preventDefault()
  
  const order = {}
  order.buyer = dataForm
  order.items = cartList.map(({nombre, id, precio, cantidad}) => ({id, nombre, precio, cantidad}))
  order.total = precioTotal()
  
  const dbFirestore = getFirestore()
  const ordersCollection = collection(dbFirestore, 'orders')

  addDoc(ordersCollection, order)
  .then(resp => console.log(resp))
  }

  const handleOnChange = (evt)=>{
    setDataForm({
        ...dataForm,
        [evt.target.name]: evt.target.value
    })
  }
  console.log(dataForm)

  return (
    <div className='totali'>
        { cartList.length !== 0 ? 
          <>
            {cartList.map(producto => (
              <div className='cartview'>
                <img className='cartimg' src={producto.foto} />
                <div className='cartext'>
                  <h2 className='nombrecart' >{producto.nombre}</h2>
                  <h3>Cantidad: {producto.cantidad}</h3>
                  <h3 className='preciocart' >${producto.precio}</h3>
                </div>
                <button className='kitar' onClick={() => eliminarProducto(producto.id)} >X</button>
              </div>
            ))}
            <h3>Total: {precioTotal()} </h3>
            <button className='btncards' onClick={vaciarCarrito}>Vaciar Carrito</button>
            
            <form onSubmit={generarOrden}>
              <input 
                type="text"
                name='nombre'
                onChange={handleOnChange}
                value={dataForm.nombre}
                placeholder='Nombre'
              />

              <input 
              type="text" 
              name='phone' 
              onChange={handleOnChange} 
              value={dataForm.phone} 
              placeholder='Telefono'
              />

              <input 
              type="text" 
              name='email' 
              onChange={handleOnChange} 
              value={dataForm.email} 
              placeholder='Email'
              />

              <button className='btncards'> Generar Orden </button>
            </form>
          </>
        :
              <div className='totali'>
                <h2 className='np'>NO HAY NINGUN PRODUCTO</h2>
                <Link to='/'>
                  <button className='btncards' >Ir a Comprar</button>
                </Link>
              </div>
        }
    </div>
  )
}

export default CartContainer