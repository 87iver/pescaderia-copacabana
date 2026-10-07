import { useState } from 'react'

import './components/ProductoCard.css'
import './pages/Bienvenida.css'
import './App.css'
import './pages/Inicio.css'
import './components/Navbar.css'

import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Bienvenida from './pages/Bienvenida'

function App() {

    const [empezo, setEmpezo] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    return (
        <>
            {!empezo ? (
                <Bienvenida
                    comenzar={() => setEmpezo(true)}
                />
            ) : (
                <>
                    <Navbar
                        abrirCarrito={() => {
                            setMostrarCarrito(!mostrarCarrito)
                        }}
                    />
                    <Inicio
                        carrito={carrito}
                        setCarrito={setCarrito}
                        mostrarCarrito={mostrarCarrito}
                        abrirCarrito={() => setMostrarCarrito(!mostrarCarrito)}
                    />
                </>
            )}
        </>
    )
}

export default App  