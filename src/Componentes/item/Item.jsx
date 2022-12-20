import { Link } from "react-router-dom"

const Item = ({prod})=>{
    const img = prod.post
    console.log(img)
    return (
        <div className="cart">
            <img className="cart__img" src={img} alt="" />
            <div className="cart__details">
                <h1 className="cart__name">{prod.name}</h1>
                <h2 className="cart__price">${prod.price}</h2>
            </div>
            <Link to={`./details/${prod.id}`}>
                <button className="cart__button">detalle</button>
            </Link>
        </div>
    )
}

export default Item