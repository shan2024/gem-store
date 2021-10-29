import { Link } from "react-router-dom";

function Item(props) {

    
    return (
        <div className="item">
            <div className={"cart-item-image " + props.name}></div>
            <div className = "cart-desc">
                <h2 className="cart-item-name">{props.name}</h2>
                <h2 className="cart-item-cost">$19.99</h2>
                <div className="add-button">
                    <button onClick = { () => props.removeGem(props.name)}>-</button>
                    <p>{props.amount}</p>
                    <button onClick = {() => props.addGem(props.name)}>+</button>
                </div>
            </div>

        </div>
    );
}

export default Item;