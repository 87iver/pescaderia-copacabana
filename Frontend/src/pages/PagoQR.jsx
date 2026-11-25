import './PagoQR.css'
import qrCopacabana from '../assets/qr-copacabana.jpeg'

function PagoQR({ total, carrito, volver }) {
    return (
        <section className="pago-qr">
            <h2>💳 Realiza tu pago</h2>

            <p>Escanea el código QR para pagar tu pedido.</p>

            <div className="qr-contenedor">
                <img
                    src={qrCopacabana}
                    alt="Código QR de pago Copacabana"
                />
            </div>

            <h3>Total a pagar</h3>
            <strong>Bs. {total}</strong>

            <button onClick={volver}>
                ← Volver
            </button>
            <h3>🛒 Tu pedido</h3>

            <div className="resumen-pedido">
                <p>
                    Cantidad de platos: {carrito.reduce(
                        (total, pedido) => total + (pedido.cantidad || 1),
                        0
                    )}
                </p>

                {carrito.map((pedido, index) => (
                    <p key={index}>
                        🐟 {pedido.nombre} x {pedido.cantidad || 1}
                    </p>
                ))}
            </div>
        </section>
    )
}

export default PagoQR