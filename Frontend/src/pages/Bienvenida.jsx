function Bienvenida({ comenzar }) {
    return (
        <main className="bienvenida">

            <div className="bienvenida-contenido">

                <div className="bienvenida-pescado">
                    🐟
                </div>

                <p className="bienvenida-etiqueta">
                    PENSIÓN DE PESCADO
                </p>

                <h1>
                    COPACABANA
                </h1>

                <p>
                    El sabor del lago en cada plato
                </p>

                <button
                    className="boton-comenzar"
                    onClick={comenzar}
                >
                    🍽️ PRESIONE PARA ORDENAR
                </button>

            </div>

        </main>
    )
}

export default Bienvenida