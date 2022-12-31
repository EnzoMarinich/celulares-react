import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    const addToCart = (celular)=>{
        const idx = cartList.findIndex(prod=>prod.id == celular.id)
        if(idx == -1){
            setCartList([celular, ...cartList])
        } else {
            cartList[idx].cantidad += celular.cantidad
            setCartList([...cartList])
        }     
    }


    const eliminarProd = (celular)=>{
        setCartList(cartList.filter((prod)=>prod.id !== celular.id))
    }


    const vaciarCart= ()=>{
        setCartList([])
    }


    // const cantidadTotal = ()=> cartList.reduce((cont, prod)=> cont += prod.cantidad, 0)

    const precioTotal = ()=> cartList.reduce((cont, prod) => cont += (prod.price * prod.cantidad) , 0)

    const cantidadTotal = ()=> cartList.reduce((cont, prod)=> cont += prod.cantidad, 0)

    const subTotal = (cel)=> (cel.cantidad*cel.price)


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCart,
            eliminarProd,
            precioTotal,
            cantidadTotal,
            subTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



