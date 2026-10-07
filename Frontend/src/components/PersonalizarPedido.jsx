import { useState } from 'react'
import './PersonalizarPedido.css'

function PersonalizarPedido({ producto, cerrar, agregar }) {

    const [recado, setRecado] = useState({
        mote: true,
        papa: true,
        chuño: true,
        limon: true,
        llajua: false,
        aji: false
    })

    return (
        <div className="modal-fondo">

            <div className="modal-pedido">

                <button
                    className="cerrar-modal"
                    onClick={cerrar}
                >
                    ✕
                </button>

                <h2>
                    🐟 {producto.nombre}
                </h2>

                <p className="precio-modal">
                    Bs. {producto.precio}
                </p>

                <h3>
                    ¿Cómo quieres tu plato?
                </h3>

                {/* MOTE */}
                <div className="opcion-pedido">

                    <span>🍚 Mote</span>

                    <div>

                        <button
                            className={recado.mote ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    mote: true
                                })
                            }
                        >
                            Con
                        </button>

                        <button
                            className={!recado.mote ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    mote: false
                                })
                            }
                        >
                            Sin
                        </button>

                    </div>

                </div>


                {/* PAPA */}
                <div className="opcion-pedido">

                    <span>🥔 Papa</span>

                    <div>

                        <button
                            className={recado.papa ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    papa: true
                                })
                            }
                        >
                            Con
                        </button>

                        <button
                            className={!recado.papa ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    papa: false
                                })
                            }
                        >
                            Sin
                        </button>

                    </div>

                </div>


                {/* CHUÑO */}
                <div className="opcion-pedido">

                    <span>🥔 Chuño</span>

                    <div>

                        <button
                            className={recado.chuño ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    chuño: true
                                })
                            }
                        >
                            Con
                        </button>

                        <button
                            className={!recado.chuño ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    chuño: false
                                })
                            }
                        >
                            Sin
                        </button>

                    </div>

                </div>


                {/* LIMÓN */}
                <div className="opcion-pedido">

                    <span>🍋 Limón</span>

                    <div>

                        <button
                            className={recado.limon ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    limon: true
                                })
                            }
                        >
                            Con
                        </button>

                        <button
                            className={!recado.limon ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    limon: false
                                })
                            }
                        >
                            Sin
                        </button>

                    </div>

                </div>


                {/* LLAJUA */}
                <div className="opcion-pedido">

                    <span>🌶️ Llajua</span>

                    <div>

                        <button
                            className={recado.llajua ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    llajua: true
                                })
                            }
                        >
                            Con
                        </button>

                        <button
                            className={!recado.llajua ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    llajua: false
                                })
                            }
                        >
                            Sin
                        </button>

                    </div>

                </div>


                {/* AJÍ */}
                <div className="opcion-pedido">

                    <span>🔥 Ají</span>

                    <div>

                        <button
                            className={recado.aji ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    aji: true
                                })
                            }
                        >
                            Con
                        </button>

                        <button
                            className={!recado.aji ? 'seleccionado' : ''}
                            onClick={() =>
                                setRecado({
                                    ...recado,
                                    aji: false
                                })
                            }
                        >
                            Sin
                        </button>

                    </div>

                </div>

                <button
                    className="agregar-pedido"
                    onClick={() => {
                        agregar({
                            ...producto,
                            recado
                        })

                        cerrar()
                    }}
                >
                    🍽️ Agregar al pedido
                </button>

            </div>

        </div>
    )
}

export default PersonalizarPedido