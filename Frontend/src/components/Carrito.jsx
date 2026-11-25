import './Carrito.css'
function Carrito({ carrito, setCarrito, cerrarCarrito ,continuarPedido }) {
    
    
    const total = carrito.reduce(
        (suma, pedido) => suma + (pedido.precio*(pedido.cantidad ||1)),
        0
    )
    return (
        <div className="carrito">
            <button
                className="cerrar-carrito"
                onClick={cerrarCarrito}
            >
                ✕
            </button>
            <h2>🛒 Mi pedido</h2>
            {carrito.length === 0 ? (
                <p>
                    Tu carrito está vacío.
                </p>
            ) : (
                <>
                    {carrito.map((pedido, index) => (
                        <div
                            className="carrito-producto"
                            key={index}
                        >
                            <h3>
                                🐟 {pedido.nombre}
                            </h3>
                            <p>
                                Bs. {pedido.precio}
                            </p>
                            <div className="control-cantidad">
                                <button
                                    onClick={() => {
                                        const nuevoCarrito = [...carrito]

                                        nuevoCarrito[index] = {
                                            ...pedido,
                                            cantidad: Math.max(1, (pedido.cantidad || 1) - 1)
                                        }

                                        setCarrito(nuevoCarrito)
                                    }}
                                >
                                    −
                                </button>

                                <span>{pedido.cantidad || 1}</span>

                                <button
                                    onClick={() => {
                                        const nuevoCarrito = [...carrito]

                                        nuevoCarrito[index] = {
                                            ...pedido,
                                            cantidad: (pedido.cantidad || 1) + 1
                                        }

                                        setCarrito(nuevoCarrito)
                                    }}
                                >
                                    +
                                </button>
                            </div>
                            <p>
                                Mote: {pedido.recado.mote ? 'Con' : 'Sin'}
                            </p>
                            <p>
                                Papa: {pedido.recado.papa ? 'Con' : 'Sin'}
                            </p>
                            <p>
                                Chuño: {pedido.recado.chuño ? 'Con' : 'Sin'}
                            </p>
                            <p>
                                Limón: {pedido.recado.limon ? 'Con' : 'Sin'}
                            </p>
                            <p>
                                Llajua: {pedido.recado.llajua ? 'Con' : 'Sin'}
                            </p>
                            <p>
                                Ají: {pedido.recado.aji ? 'Con' : 'Sin'}
                            </p>
                            <button
                                className="eliminar-producto"
                                onClick={() => {
                                    const nuevoCarrito = carrito.filter(
                                        (_, i) => i !== index
                                    )
                                    setCarrito(nuevoCarrito)
                                }}
                            >
                                🗑️ Eliminar
                            </button>
                        </div>
                    ))}
                    <div className="carrito-total">
                        <span>Total</span>
                        <strong>Bs. {total}</strong>
                    </div>
                    <button
                        className="confirmar-pedido"
                        onClick={continuarPedido}
                    >
                        CONTINUAR CON MI PEDIDO →
                    </button>
                   
                </>
            )}
        </div>
    )
}
export default Carrito