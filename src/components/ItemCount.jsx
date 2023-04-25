import { Link } from 'react-router-dom'
import './ItemCount.css'
import { useCounter} from './useCounter'

const ItemCount = ({initial=1, stock=5, onAdd}) => {

  const { counter, handleSumar, handleRestar } = useCounter(initial, 1, stock)

  return (
    <div className='itemcount'>
      <div className='botonsitos'>
        <button className='btncountmas' onClick={handleSumar}> + 1 </button>
        <label> {counter} </label>
        <button className='btncountmenos' onClick={handleRestar}> - 1 </button>
      </div>
      <button className='btncountadd' >Agregar al Carrito</button>
      <Link to={'/'}>
        <button className='btncountadd'>Seguir Comprando</button>
      </Link>
    </div>
  )
}

export default ItemCount