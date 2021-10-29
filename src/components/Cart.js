import Item from "./Item";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

function Cart(props) {

    function makePayment( ) {
        alert("Thank you for shopping with us!");
    }

    function calculateCost() {
        let numItems = 0;
        props.cart.forEach(item => {
            numItems += item[1];
        });
        return (numItems * 19.99).toFixed(2);
    }
    return (
        <div className="cart-background">
            <div className="main" id="cart">
                <h2 className = "cart-title">Your Cart</h2>
                {/* put items here */}
                <div className = "cart-items">
                {props.cart.map(item => {
                    if (item[1] != 0) {
                        return <Item key = {item[2]}  name={item[0]}  amount={item[1] } addGem = {props.addGem} removeGem = {props.removeGem} />
                    }
                })}
                </div>
                <h2 className = "cart-total">Your total: ${calculateCost()}</h2>
                <h2 className = "cart-payment-button" onClick = {makePayment}>Proceed to payment</h2>
                <Link className = "cart-shop-button" to = "/shop">Back to Shop</Link>
            </div>
        </div>
      
    );
  }
  
  export default Cart;