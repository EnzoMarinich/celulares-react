import { useEffect } from "react"
import { useState } from "react"


const ItemCount = ({onAdd, stock})=>{

    let [cant, setCant]=useState(1)

    const sumar = ()=>{
        if(cant < stock)
        setCant(cant+1)
    }

    const restar = ()=>{
        if(cant !== 0){
            setCant(cant-1)
        }                 
    }

    const handleOnAdd = ()=>{
        onAdd(cant)
    }

    return (
        <>
        <div className="itemCount">
            <button onClick={restar} className="restar">-</button>
            <div className="num">{cant}</div>
            <button onClick={sumar} className="sumar">+</button>
        </div>
        <button onClick={handleOnAdd} className="añadirCarrito">add to cart</button>
        </>
    )

}

export default ItemCount