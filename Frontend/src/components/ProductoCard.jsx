function ProductoCard({ nombre, descripcion, precio }) {
    return (
        <div>
            <h3>{nombre}</h3>

            <p>{descripcion}</p>

            <p>Bs. {precio}</p>

            <button>
                ¡Pedir tu 🐟 faborito!
            </button>
        </div>
    )
}

export default ProductoCard