import { useState } from 'react'
import TipoEntrega from './TipoEntrega'
import ProductoCard from '../components/ProductoCard'
import PersonalizarPedido from '../components/PersonalizarPedido'
import Carrito from '../components/Carrito'
import copacabana from '../assets/copacabana.jpg'
import trucha from '../assets/trucha.jpg'
import pejerrey from '../assets/pejerey.jpg'
import sabalo from '../assets/sabalo.jpg'
import PagoQR from './PagoQR'

function Inicio({ carrito, setCarrito, mostrarCarrito, abrirCarrito }) {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null)
    const [mostrarTipoEntrega, setMostrarTipoEntrega] = useState(false)
    const [tipoEntrega, setTipoEntrega] = useState('')
    const [mostrarPago, setMostrarPago] = useState(false)
    const cantidadPlatos = carrito.reduce(
        (total, pedido) => total + (pedido.cantidad || 1),
        0
    )
    const totalCarrito = carrito.reduce(
        (total, pedido) => total + pedido.precio * (pedido.cantidad || 1),
        0
    )
    if (mostrarPago) {
        return (
            <PagoQR
                total={totalCarrito}
                carrito={carrito}
                volver={() => setMostrarPago(false)}
            />
        )
    }
    if (mostrarTipoEntrega) {
        return (
            <TipoEntrega
                seleccionar={(tipo) => {
                    setTipoEntrega(tipo)
                    setMostrarTipoEntrega(false)
                    setMostrarPago(true)
                }}
                volver={() => setMostrarTipoEntrega(false)}
            />
        )
    }
    return (
        <main>
            {carrito.length > 0 && !productoSeleccionado && (
                <button
                    className="barra-pedido"
                    onClick={abrirCarrito}
                >
                    <span>
                        🛒 {cantidadPlatos} plato{cantidadPlatos !== 1 ? 's' : ''}
                    </span>

                    <span>
                        Bs. {totalCarrito}
                    </span>

                    <strong>
                        VER PEDIDO →
                    </strong>
                </button>
            )}


            <section className="hero">
                <div className="hero-text">
                    <p className="etiqueta">
                        SABOR DEL LAGO TITICACA
                    </p>
                    <h1>
                        Bienvenido a
                        <br />
                        <span>Copacabana</span>
                    </h1>
                    <p className="descripcion">
                        Disfruta pescado fresco, preparado al momento
                        y con el auténtico sabor de nuestra tierra.
                    </p>
                    <button className="boton-menu"
                            onClick={() => {
                            document.getElementById('menu').scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}
                    >
                        🍽️ VER NUESTRO MENÚ
                    </button>
                </div>

                <div className="hero-pescado">
                    <img
                        src={copacabana}
                        alt="Copacabana y el Lago Titicaca"
                    />
                </div>

            </section>

            <section className="platos" id="menu">

                <p className="etiqueta">
                    LO MÁS PEDIDO
                </p>

                <h2 className="etiqueta">
                    Nuestros platos
                </h2>

                <div className="productos">

                    <ProductoCard
                        nombre="Trucha Frita"
                        descripcion="Trucha fresca acompañada de arroz, papa y ensalada."
                        precio={35}
                        imagen={trucha}
                        pedir={setProductoSeleccionado}
                    />

                    <ProductoCard
                        nombre="Pejerrey"
                        descripcion="Pejerrey crujiente con guarnición y ensalada fresca."
                        precio={30}
                        imagen={pejerrey}
                        pedir={setProductoSeleccionado}
                    />

                    <ProductoCard
                        nombre="Sábalo Frito"
                        descripcion="Sábalo dorado y crujiente acompañado de papa y ensalada."
                        precio={40}
                        imagen={sabalo}
                        pedir={setProductoSeleccionado}
                    />

                    <ProductoCard
                        nombre="Trucha a la Plancha"
                        descripcion="Trucha preparada a la plancha con guarnición fresca."
                        precio={38}
                        imagen={trucha}
                        pedir={setProductoSeleccionado}
                    />

                </div>

            </section>

            {productoSeleccionado && (
                <PersonalizarPedido
                    producto={productoSeleccionado}
                    cerrar={() => setProductoSeleccionado(null)}
                    agregar={(pedido) => {
                        setCarrito((carritoActual) => [...carritoActual,{ ...pedido,cantidad: 1 }])
                    }}
                />
            )}

            {mostrarCarrito && (
            <Carrito
                carrito={carrito}
                setCarrito={setCarrito}
                cerrarCarrito={() => abrirCarrito()}
                continuarPedido={() => {
                abrirCarrito()
                setMostrarTipoEntrega(true)}}
            />
        )}
        </main>
    )
}
export default Inicio
