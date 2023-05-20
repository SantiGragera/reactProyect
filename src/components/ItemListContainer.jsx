import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { mFetch, mFetche } from "./utils/mFetch"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom';
import Filter from './Filter';

const ItemListContainer = ({prop}) => {

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState (true)
    const { categoria } = useParams()

    // useEffect(() => {
    //         mFetch()
    //         .then(resultado => {
    //             setProductos(resultado)
    //         })
    //         .catch(error => console.log(error))
    //         .finally(() => setIsLoading(false))
    // }, [])
    // useEffect(() => {
    //     if (!categoria){
    //         mFetche()
    //         .then(resultado => {
    //             setProductos(resultado)
    //         })
    //         .catch(error => console.log(error))
    //         .finally(() => setIsLoading(false))
    //     }else{
    //         mFetche()
    //         .then(resultado => {
    //             setProductos(resultado.filter(productos => productos.categoria === categoria))
    //         })
    //         .catch(error => console.log(error))
    //         .finally(() => setIsLoading(false))
    //     }
    // }, [categoria])

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')    

        if (!categoria) {
            getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(producto => ( { id: producto.id, ...producto.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        }else{
            const queryCollectionFiltered = query(
                queryCollection,
                where('categoria','==', categoria),

            )

            getDocs(queryCollectionFiltered)
            .then(res => setProductos( res.docs.map(producto => ( { id: producto.id, ...producto.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        }
    }, [categoria])

    const handleProductFiltered = ({ filterState, handleFilterChange }) => (
        <div className='todocat'>
            <div className='inputsasa'>
                <h2 className='buscarpr'>Buscar Producto</h2>
                <input className='inputnasi' type="text" value={filterState} onChange={handleFilterChange} />
            </div>
            <div className='ilc'>
                <div className='ilc'>
                    { isLoading ?
                                <h2 className='charging'> Cargando...</h2>
                            :
                                <>
                                    {filterState === '' 

                                        ?   productos.map( producto => <div key={producto.id} className='cards'>
                                                                        <img className='foto' src={producto.foto} alt="foto producto" />
                                                                        <div className='contexto'>
                                                                            <h4 className='nombre'>{producto.nombre}</h4>
                                                                            <h5 className='precio'>${producto.precio}</h5>
                                                                            <h6 className='stock'>{producto.stock} Unidades</h6>
                                                                            <Link to={`/detail/${producto.id}`}>
                                                                                <button className='btncards'>Ver más</button>
                                                                            </Link>
                                                                        </div>
                                                                    </div> 
                                            )
                                        :
                                        productos.filter( producto => producto.nombre.toLowerCase().includes(filterState.toLowerCase()))
                                        .map( producto => <div key={producto.id} className='cards'>
                                        <img className='foto' src={producto.foto} alt="foto producto" />
                                        <div className='contexto'>
                                            <h4 className='nombre'>{producto.nombre}</h4>
                                            <h5 className='precio'>{producto.precio}</h5>
                                            <h6 className='stock'>{producto.stock} Unidades</h6>
                                            <Link to={`/detail/${producto.id}`}>
                                                <button className='btncards'>Ver más</button>
                                            </Link>
                                        </div>
                                    </div> 
            )
                                    }
                                </>
                    }
                </div>
            </div>
        </div>
    )           
    return (
        <div>
                <Filter>
                    { handleProductFiltered }
                </Filter>        
        </div>
    )
}

export default ItemListContainer