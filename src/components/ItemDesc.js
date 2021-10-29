import { Link } from "react-router-dom";

function ItemDesc(props) {

    function addItem() {
        props.addGem( props.selectedItem[0]);
    }
    
    return (
        <div className="item-desc-background">
            <div className="item-desc" >
                <div className={"item-image " + props.selectedItem[0]}></div>
                <div className="item-desc-info">
                    <h3 className="item-name">{props.selectedItem[0]}</h3>
                    <h3 className="item-cost">{props.selectedItem[1]}</h3>
                    <p className="item-description">{props.selectedItem[2]}</p>
                    <Link to = "/cart" className = "add-cart-button" onClick = {addItem}> Add to Cart</Link>
                    <Link to = "/shop" className = "back-shop-button">Back to Shop</Link>
                </div>

            </div>
        </div>
        
    );
}

export default ItemDesc;