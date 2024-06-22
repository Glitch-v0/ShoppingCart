import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>
        </div>
        )
}

export default NavBar