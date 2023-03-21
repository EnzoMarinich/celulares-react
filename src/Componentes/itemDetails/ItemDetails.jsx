import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/Cartcontext"
import ItemCount from "../itemCount/ItemCount"




const ItemDetails =({celular})=>{


    const [selec, setSelec] =useState(false)
    const {addToCart} = useCartContext()

    const onAdd = (cant)=>{
    addToCart({ ...celular, cantidad: cant})
    setSelec(true)
    }




    return(
            <div className="detail__container">
                <img className="container__img" src={celular.post} />
                <div className="container__caracteristicas">
                    <h1>{celular.name}</h1>
                    <h3>Memoria: {celular.memoria}</h3>
                    <h3>Color: {celular.color}</h3>
                    <h3>Precio: ${celular.price}</h3>
                    {selec?
                    <>
                    <Link className="link" to={"../../cart"}>
                    <button>ver carrito</button>
                    </Link>
                    <Link className="link" to={"../../"}>
                    <button>ir a la tienda</button>
                    </Link>
                    </>                    
                    :
                    <ItemCount stock={celular.stock} onAdd={onAdd} />
                    }  
                </div>
            </div>
    )
}

export default ItemDetails