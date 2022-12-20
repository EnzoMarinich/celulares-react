import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <header className="nav">
            <nav className="nav__bar">
                <img className="nav__bar__img" src="/logo.png" alt="logo" />
                <ul className="nav__bar__ul">
                    <li className="nav__bar__ul__li"><Link to="./">Home</Link></li>
                    <li className="nav__bar__ul__li"><Link to="./">Android</Link></li>
                    <li className="nav__bar__ul__li"><Link to="./">Apple</Link></li>
                </ul>
            </nav>
            <Link to="./cart" className="nav__cart">
                <span className="material-symbols-outlined">
                shopping_cart
                </span>
                <h1>1</h1>
            </Link>
            
            
        </header>
    )
}

export default Navbar