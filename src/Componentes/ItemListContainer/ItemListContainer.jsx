import ItemList from "../ItemList/ItemList"
import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../gFetch"

const ItemListContainer = ()=>{
    const [prods, setProds]= useState([])
    const [loading, setLoading] = useState(true)
    useEffect( ()=>{
        gFetch()
        .then(data=>setProds(data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
        }, []
    )
    return (
        <section className="main">
            {loading? <h1>loading...</h1> : 
            <ItemList prods={prods}/>
            }
        </section>
    )
}

export default ItemListContainer