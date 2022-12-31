import { Link } from "react-router-dom"
import { useCartContext } from "../../context/Cartcontext"

const Navbar = ()=>{
    const {cantidadTotal}=useCartContext()

    return(
        <header className="nav">
            <nav className="nav__bar">
                <img className="nav__bar__img" src="/logo.png" alt="logo" />
                <ul className="nav__bar__ul">
                    <li className="nav__bar__ul__li"><Link to="/">Home</Link></li>
                    <li className="nav__bar__ul__li"><Link to="/category/android">Android</Link></li>
                    <li className="nav__bar__ul__li"><Link to="/category/apple">Apple</Link></li>
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