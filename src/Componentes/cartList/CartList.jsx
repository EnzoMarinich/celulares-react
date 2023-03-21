import { useCartContext } from "../../context/Cartcontext"

const CartList = ()=>{

    const {cartList, subTotal, eliminarProd}= useCartContext()


    return(
        cartList.map(prod=>
            <div className="cartDetail" key={prod.id}>
                <div>
                    <img className="cartDetailImg" src={prod.post} alt="" />
                </div>
                <div className="caracteristicas">
                    <h1>{prod.name}</h1>
                    <p>memoria: {prod.memoria} - color: {prod.color}</p>
                    <p>cantidad seleccionada: {prod.cantidad}</p>
                    <h3>${prod.price} x unidad</h3>
                    <p>Subtotal: ${prod.price*prod.cantidad}</p>
                </div>
                <button className="eliminar" onClick={()=>eliminarProd(prod) }  style={{height:"40px"}}>eliminar producto</button>
            </div>
        )
)
}

export default CartList