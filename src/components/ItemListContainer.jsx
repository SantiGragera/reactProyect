import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { mFetch } from "./utils/mFetch"
import { Link, useParams } from 'react-router-dom';
import Filter from './Filter';

const ItemListContainer = ({prop}) => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState (true)
    const { categoria } = useParams()
    console.log( categoria )
    useEffect(() => {
            mFetch()
            .then(resultado => {
                setProductos(resultado)
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
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
                                                                            <h5 className='precio'>{producto.precio}</h5>
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