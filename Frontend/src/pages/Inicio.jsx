import ProductoCard from '../components/ProductoCard'

import copacabana from '../assets/copacabana.jpg'
import trucha from '../assets/trucha.jpg'
import pejerrey from '../assets/pejerey.jpg'
import sabalo from '../assets/sabalo.jpg'
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
                    <img
                        src={copacabana}
                        alt="Copacabana y el Lago Titicaca"
                    />
                </div>

            </section>


            <section className="platos">

                <p className="etiqueta">
                    LO MÁS PEDIDO
                </p>

                <h2 className='etiqueta'>
                    Nuestros platos
                </h2>

                <div className="productos">

                    <ProductoCard
                        nombre="Trucha Frita"
                        descripcion="Trucha fresca acompañada de arroz, papa y ensalada."
                        precio={35}
                        imagen={trucha}
                    />

                    <ProductoCard
                        nombre="Pejerrey"
                        descripcion="Pejerrey crujiente con guarnición y ensalada fresca."
                        precio={30}
                        imagen={pejerrey}
                    />

                    <ProductoCard
                        nombre="Sábalo Frito"
                        descripcion="Sábalo dorado y crujiente acompañado de papa y ensalada."
                        precio={40}
                        imagen={sabalo}
                    />

                    <ProductoCard
                        nombre="Trucha a la Plancha"
                        descripcion="Trucha preparada a la plancha con guarnición fresca."
                        precio={38}
               
                    />

                </div>

            </section>

        </main>
    )
}

export default Inicio