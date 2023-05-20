import { Link, NavLink} from 'react-router-dom'
import './NavBar.css'
import { useCartContext } from '../context/CartContext'

const NavBar = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <header className='headerHome'>
            <Link to='/' className='logoCat'>
                <img src="../public/escudoTalleres.png" alt="escudo talleres" />
            </Link>
            <nav>
                <div className="navHome">
                    <NavLink className={ ({isActive})=> isActive ? 'mli mla' : 'mli ma'}  to="/categoria/lineaTalleres">Linea Talleres</NavLink>
                    <NavLink className={ ({isActive})=> isActive ? 'mli mla' : 'mli ma'} to="/categoria/accesorios">Accesorios</NavLink>
                    <NavLink className={ ({isActive})=> isActive ? 'mli mla' : 'mli ma'} to="/categoria/merch">Merchandising</NavLink>
                </div>
            </nav>
            <Link to='/cart'>
                <div className="carrito">
                    <img src="../multimedia/carrito.png" alt="" />
                    <h2 className='totalCantidad'>{cantidadTotal()}</h2>
                </div>
            </Link>
        </header>
    )
}
export default NavBar