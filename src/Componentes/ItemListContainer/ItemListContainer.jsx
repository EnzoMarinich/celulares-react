import ItemList from "../ItemList/ItemList"
import { createContext, useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


export const AppContext = createContext({})

const ItemListContainer = ()=>{
    const [prods, setProds]= useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    

    useEffect( ()=>{
        const db = getFirestore()
        const queryCollections = collection(db, "productos")
        if(category){
            setLoading(true)
            const queryFilter = query(queryCollections, where("sistem", "==", category))
            getDocs(queryFilter)
            .then(resp=>setProds(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        } else{
            setLoading(true)
            getDocs(queryCollections)
            .then(resp=>setProds(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
            }
        }
    , [category]
    )


    return (
        <AppContext.Provider value={{prods}}>
            <section className="main">
                {loading? <h1>loading...</h1> : 
                <ItemList/>
            }
            </section>
        </AppContext.Provider>
    )
}

export default ItemListContainer