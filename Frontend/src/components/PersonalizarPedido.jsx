import { useState } from 'react'
import './PersonalizarPedido.css'
function PersonalizarPedido({ producto, cerrar, agregar }) {
    const [recado, setRecado] = useState({
        mote: false,
        papa: false,
        chuño: false,
        limon: false,
        llajua: false,
        aji: false
    })
    // Cambiar el estado de un ingrediente
    function cambiarIngrediente(ingrediente) {
        setRecado({
            ...recado,
            [ingrediente]: !recado[ingrediente]
        })
    }
    // Activar los acompañamientos habituales
    function conTodo() {
        const activarTodo = !Object.values(recado).every(Boolean)
        
        setRecado({
            mote: activarTodo,
            papa: activarTodo,
            chuño: activarTodo,
            limon: activarTodo,
            llajua: activarTodo,
            aji: activarTodo
        })
    }
    return (
        <div className="modal-fondo" onClick={cerrar}>
            <div className="modal-pedido"
            onClick={(e) => e.stopPropagation()}>
                <button
                    className="cerrar-modal"
                    onClick={cerrar}
                    aria-label="Cerrar personalización"
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
                <button
                    type="button"
                    className={`boton-con-todo ${
                        Object.values(recado).every(Boolean) ? 'activo' : ''
                    }`}
                    onClick={conTodo}
                >
                    🥘 Con todo
                </button>
                <p className="texto-acompanamientos">
                    Personaliza los ingredientes de tu plato.
                </p>
                {/* MOTE */}
                <label className="opcion-pedido">
                    <span htmlFor="mote">🍚 Mote</span>
                    <span className="switch">
                        <input
                            type="checkbox"
                            checked={recado.mote}
                            onChange={() => cambiarIngrediente('mote')}
                        />  
                        <span className="switch-slider"></span>
                    </span>
                </label>
                {/* PAPA */}
                <label className="opcion-pedido">
                    <span htmlFor="papa">🥔 Papa</span>
                    <span className="switch">
                        <input
                            id="papa"
                            type="checkbox"
                            checked={recado.papa}
                            onChange={() => cambiarIngrediente('papa')}
                        />
                        <span className="switch-slider"></span>
                    </span>
                </label>
                {/* CHUÑO */}
                <label className="opcion-pedido">
                    <span htmlFor="chuno">🥔 Chuño</span>
                    <span className="switch">
                        <input
                            id="chuno"
                            type="checkbox"
                            checked={recado.chuño}
                            onChange={() => cambiarIngrediente('chuño')}
                        />
                        <span className="switch-slider"></span>
                    </span>
                </label>
                {/* LIMÓN */}
                <label className="opcion-pedido">
                    <span htmlFor="limon">🍋 Limón</span>
                    <span className="switch">
                        <input
                            id="limon"
                            type="checkbox"
                            checked={recado.limon}
                            onChange={() => cambiarIngrediente('limon')}
                        />
                        <span className="switch-slider"></span>
                    </span>
                </label>
                {/* LLAJUA */}
                <label className="opcion-pedido">
                    <span htmlFor="llajua">🌶️ Llajua</span>
                    <span className="switch">
                        <input
                            id="llajua"
                            type="checkbox"
                            checked={recado.llajua}
                            onChange={() => cambiarIngrediente('llajua')}
                        />
                        <span className="switch-slider"></span>
                    </span>
                </label>
                {/* AJÍ */}
                <label className="opcion-pedido">
                    <span htmlFor="aji">🔥 Ají</span>
                    <span className="switch">
                        <input
                            id="aji"
                            type="checkbox"
                            checked={recado.aji}
                            onChange={() => cambiarIngrediente('aji')}
                        />
                        <span className="switch-slider"></span>
                    </span>
                </label>
                <button
                    className="agregar-pedido"
                    onClick={() => {
                        agregar({
                            ...producto,
                            recado: { ...recado }
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