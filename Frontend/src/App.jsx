import { useState } from 'react'
import './App.css'
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