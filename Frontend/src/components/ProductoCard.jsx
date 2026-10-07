function ProductoCard({ nombre, descripcion, precio, imagen, pedir }) {
    return (
        <div className="producto-card">

            <div className="producto-imagen">
                <img src={imagen} alt={nombre} />
            </div>

            <div className="producto-info">

                <h3>{nombre}</h3>

                <p>{descripcion}</p>

                <div className="producto-abajo">

                    <strong>
                        Bs. {precio}
                    </strong>

                    <button
                        className="boton-pedir"
                        onClick={() =>
                            pedir({
                                nombre,
                                descripcion,
                                precio,
                                imagen
                            })
                        }
                    >
                        🍽️ Pedir
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductoCard
