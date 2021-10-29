import { Link } from "react-router-dom";
function Home() {
    return (
      <div  className = "main" id = "home">
        <h1 id = "main-title">THE GEM SHOP</h1>
        <p id = "main-quote">"The greatest gems in all the world... at your fingertips!"</p>
        <Link to = "/shop" id = "shop-link"><h3 id = "main-button">VISIT THE SHOP</h3></Link>
      </div>
    );
  }
  
  export default Home;