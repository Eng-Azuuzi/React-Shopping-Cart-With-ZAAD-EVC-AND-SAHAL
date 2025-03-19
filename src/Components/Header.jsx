import { Link } from "react-router-dom";
import useShop from "../ShopContext";
function Header() {
    const {products}=useShop();
    return (
        <div className="menu">
            <Link to="/" className="logo">25 Market</Link>
                    <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="About">About</Link>
                    <Link to="Contact">Contact</Link>
                    <Link to="Cart">Cart</Link>
            </div>
            <Link to="/cart">
                <span className="cart">{products.length}</span>
            </Link>
        </div>
    );

}

export default Header;
