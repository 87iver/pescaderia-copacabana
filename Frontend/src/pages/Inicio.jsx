import ProductoCard from '../components/ProductoCard'

function Inicio() {
    return (
        <main>

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

                    <button className="boton-menu">
                        🍽️ VER NUESTRO MENÚ
                    </button>

                </div>

                <div className="hero-pescado">
                    🐟
                </div>

            </section>


            <section className="platos">

                <p className="etiqueta">
                    LO MÁS PEDIDO
                </p>

                <h2>
                    Nuestros platos
                </h2>

                <div className="productos">

                    <ProductoCard
                        nombre="Trucha Frita"
                        descripcion="Trucha fresca acompañada de arroz, papa y ensalada."
                        precio={35}
                    />

                    <ProductoCard
                        nombre="Pejerrey"
                        descripcion="Pejerrey crujiente con guarnición y ensalada fresca."
                        precio={30}
                    />

                    <ProductoCard
                        nombre="Sopa de Pescado"
                        descripcion="Calientita, tradicional y preparada con pescado fresco."
                           precio={20}
                    />

                </div>

            </section>

        </main>
    )
}

export default Inicio