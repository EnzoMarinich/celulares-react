import { useContext } from "react"
import Item from "../item/Item"
import { AppContext } from "../ItemListContainer/ItemListContainer"


const ItemList = ()=>{

const {prods}= useContext(AppContext)

    return(
        prods.map( prod=> <Item key={prod.id} prod={prod}/> )
    )
}

export default ItemList