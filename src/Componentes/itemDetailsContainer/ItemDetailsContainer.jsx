import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {  doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetails from "../itemDetails/ItemDetails"

const ItemDetailsContainer =()=>{
    const [producto, setProducto]= useState({}) 
    const { prodId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', prodId)
        getDoc(queryDoc)
        .then(resp=> setProducto({id: resp.id ,...resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])


    return (
        <section className="detail">
            {loading? <h2>Loading...</h2> : <ItemDetails celular={producto}/>}
        </section>
    )
}
    
    

export default ItemDetailsContainer