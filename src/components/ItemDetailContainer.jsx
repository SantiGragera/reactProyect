import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { mFetch } from './utils/mFetch'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [producto, setProducto] = useState({})
  const { pid } = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'productos', pid)    

    getDoc(queryDoc)
      .then( resp => setProducto( { id: resp.id, ...resp.data() } ) )
      .catch( err => console.log(err) )
      .finally( () => setIsLoading(false) )

}, [])

  // useEffect(() => {
  //   mFetch(pid)
  //   .then(resp => setProducto(resp))
  //   .catch(err => console.log(err))
  //   .finally(() => setIsLoading(false))

  // }, [])
  
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