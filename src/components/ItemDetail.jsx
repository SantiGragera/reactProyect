import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  return (
    <div className='todito'>
      <div key={producto.id} className=''>
        <img className='fotodet' src={producto.foto} alt="foto producto" />
      </div>
      <div className='detalles'>
        <div className='textos'>
            <h4 className='nombredet'>{producto.nombre}</h4>
            <h5 className='preciodet'>{producto.precio}</h5>
            <h6 className='stockdet'>{producto.stock} Unidades</h6>
        </div>
        <div className='count'>
        <ItemCount />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail