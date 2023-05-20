import { useState } from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const ItemDetail = ({producto}) => {
  const [isCant, setIsCant] = useState(false)

  const {addToCart, cartList} = useCartContext()

  const onAdd = (cantidad) => {
    addToCart( {...producto, cantidad} )
    setIsCant(true)

  }
  return (
    <div className='todito'>
      <div key={producto.id} className=''>
        <img className='fotodet' src={producto.foto} alt="foto producto" />
      </div>
      <div className='detalles'>
        <div className='textos'>
            <h4 className='nombredet'>{producto.nombre}</h4>
            <h5 className='preciodet'>${producto.precio}</h5>
            <h6 className='stockdet'>{producto.stock} Unidades</h6>
        </div>
        {
            !isCant ?
              <div className='count'>
              <ItemCount onAdd={onAdd} />
              </div>
            :
              <>
                <div className='btnpetit'>
                  <Link to={'/'}>
                    <button className='btnpete'>Seguir Comprando</button>
                  </Link>
                  <Link to={'/cart'}>
                    <button className='btnpete'>Terminar Compra</button>
                  </Link>
                </div>
              </>
        }
      </div>
    </div>
  )
}

export default ItemDetail