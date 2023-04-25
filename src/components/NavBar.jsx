import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <header className='headerHome'>
            <Link to='/' className='logoCat'>
                <img src="../multimedia/escudoTalleres.png" alt="escudo talleres" />
            </Link>
            <nav>
                <ul className="navHome">
                    <li><a href="#">Linea Talleres</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Merchandising</a></li>
                    <li><a href="#">AhorraTe</a></li>
                </ul>
            </nav>
            <div className="carrito">
                <img src="../multimedia/carrito.png" alt="" />
                <h2>0</h2>
            </div>
        </header>
    )
}
export default NavBar