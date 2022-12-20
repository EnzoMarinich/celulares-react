import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../gFetch"
import ItemDetails from "../itemDetails/ItemDetails"

const ItemDetailsContainer =()=>{
    const [producto, setProducto]= useState({}) 
    const { prodId } = useParams()

    useEffect(()=>{
        gFetch()
        .then(resp=>setProducto(resp.find(prod=> prod.id == prodId)))
        .catch(error=>console.log(error))
    },[])

    return <ItemDetails celular={producto}/>
}

export default ItemDetailsContainer