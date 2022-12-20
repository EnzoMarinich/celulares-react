import Item from "../item/Item"


const ItemList = ({prods})=>{
    return(
        prods.map( prod=> <Item key={prod.id} prod={prod}/> )
    )
}

export default ItemList