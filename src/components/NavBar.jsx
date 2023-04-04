import './NavBar.css'

const NavBar = () => {
    return (
        <header className='headerHome'>
            <div className='logoCat'>
                <img src="../multimedia/escudoTalleres.png" alt="escudo talleres" />
            </div>
            <nav>
                <ul className="navHome">
                    <li><a href="#">Givova</a></li>
                    <li><a href="#">Remeras</a></li>
                    <li><a href="#">AhorraTe</a></li>
                    <li><a href="#">PanTalones</a></li>
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