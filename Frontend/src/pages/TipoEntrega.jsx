import './TipoEntrega.css'
function TipoEntrega({ seleccionar, volver }) {
    return (
        <section className="tipo-entrega">

            <h2>¿Cómo quieres recibir tu pedido?</h2>

            <p>Selecciona una opción para continuar.</p>

            <button onClick={() => seleccionar('local')}>
                🍽️
                <h3>Comer en el lugar</h3>
                <p>Disfruta tu plato en nuestra pensión.</p>
            </button>

            <button onClick={() => seleccionar('recoger')}>
                🛍️
                <h3>Para llevar</h3>
                <p>Preparamos tu pedido para recoger.</p>
            </button>

            <button onClick={volver}>
                ← Volver al carrito
            </button>

        </section>
    )
}

export default TipoEntrega