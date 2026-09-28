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

    return (
        <>
            {!empezo ? (
                <Bienvenida comenzar={() => setEmpezo(true)} />
            ) : (
                <>
                    <Navbar />
                    <Inicio />
                </>
            )}
        </>
    )
}

export default App