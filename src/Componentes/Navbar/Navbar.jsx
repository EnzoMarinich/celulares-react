import { Link } from "react-router-dom"
import { useCartContext } from "../../context/Cartcontext"

const categorias =[
    {categoriId:"android", name:"Android"},
    {categoriId:"apple", name:"Apple"}
] 

const Navbar = ()=>{
    const {cantidadTotal}=useCartContext()

    return(
        <header className="nav">
            <nav className="nav__bar">
                <img className="nav__bar__img" src="/logo.png" alt="logo" />
                <ul className="nav__bar__ul">
                    <li className="nav__bar__ul__li"><Link to="/">Home</Link></li>
                    {categorias.map((prod)=><li key={prod.categoriId} className="nav__bar__ul__li"><Link to={`category/${prod.categoriId}`}>{prod.name}</Link></li>)}
                </ul>
            </nav>
            <Link to="./cart" className="nav__cart">
                <span className="material-symbols-outlined">
                shopping_cart
                </span>
                <h1>{cantidadTotal()}</h1>
            </Link>           
        </header>
    )
}

export default Navbar