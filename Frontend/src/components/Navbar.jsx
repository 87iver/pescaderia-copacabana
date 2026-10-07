import "./Navbar.css";
function Navbar({ abrirCarrito }) {
    return (
        <nav className="navbar">
            <div className="logo">
                🐟 <span>Pescaderia Copacabana</span>
            </div>
            <div className="nav-links">
                <button>Inicio</button>
                <button>Menú</button>
                <button onClick={abrirCarrito}>
                    🛒 Carrito
                </button>
            </div>
        </nav>
    )
}
export default Navbar