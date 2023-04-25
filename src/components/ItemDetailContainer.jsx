import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { mFetch } from './utils/mFetch'

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [producto, setProducto] = useState({})
  const { pid } = useParams()

  useEffect(() => {
    mFetch(pid)
    .then(resp => setProducto(resp))
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))

  }, [])
  
  console.log(pid)

  return (
    <div>
      {isLoading ?
        <h2 className='charging2'>cargando...</h2>
      :
        <ItemDetail producto={producto} />
      }
    </div>
  )
}

export default ItemDetailContainer