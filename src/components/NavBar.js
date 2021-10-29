import {Link} from "react-router-dom";

function NavBar() {
    return (
      <div  className = "header" id = "nav">
          <Link to="/" className = "nav-link" id = "home-link">THE GEM SHOP</Link>
          <Link to="/" className = "nav-link">HOME</Link>
          <Link to="/shop" className = "nav-link">SHOP</Link>
          <Link to="/cart" className = "nav-link" id = "cart-link">CART</Link>

      </div>
    );
  }
  
  export default NavBar;