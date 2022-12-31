import { useCartContext } from "../../context/Cartcontext"

const CartList = ()=>{

    const {cartList, subTotal, eliminarProd}= useCartContext()


    return(
        cartList.map(prod=>
            <div className="cartDetail" key={prod.id}>
                <div>
                    <img className="cartDetailImg" src={prod.post} alt="" />
                </div>
                Nombre: {prod.name} - Memoria: {prod.memoria} - Color: {prod.color} <br></br>
                Precio por unidad: ${prod.price} -  Cantidad seleccionada: {prod.cantidad} -  Subtotal: ${subTotal}
                <button onClick={()=>eliminarProd(prod) }  style={{height:"40px"}}>eliminar producto</button>
            </div>
        )
)
}

export default CartList