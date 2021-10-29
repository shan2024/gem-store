import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ItemDesc from "./components/ItemDesc";
import "./styles/App.css";
import "./styles/Images.css";
import uniqid from "uniqid";

function App() {

  const [cart, setCart] = useState( returnCart() );
  const [selectedItem, setSelectedItem] = useState( [] );

  function returnCart(){
    return [
        [  "Sapphire", 0, uniqid()],
        [  "Diamond", 0, uniqid()],
        [  "Ruby", 0, uniqid()],
        [  "Emerald", 0, uniqid()],
        [  "Opal", 0, uniqid()],
        [  "Amber", 0, uniqid()],
        [  "Citrine", 0, uniqid()],
        [  "Aquamarine", 0, uniqid()],
        [  "Amethyst", 0, uniqid()]
        ]
}

function addGem( gemName){
    let cartCopy = Array.from(cart);
    cartCopy.forEach( (gem, index) =>{
        console.log(gemName);
        console.log(gem[0]);
        if ( gem[0] == gemName){
          console.log("got in here");
            cartCopy[index] = [cartCopy[index][0],  cartCopy[index][1] + 1];
        }
    })
    console.log( cartCopy);
    setCart( cartCopy);
}

function removeGem(gemName){
    let cartCopy = Array.from(cart);
    cartCopy.forEach( (gem, index) =>{
        if ( gem[0] == gemName){
            cartCopy[index] = [cartCopy[index][0],  cartCopy[index][1] - 1];
            if (cartCopy[index][1] < 0){
                cartCopy[index][1] = 0;
            }
        }
    })
    setCart( cartCopy);
}


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/shop" render={(props) => <Shop {...props}  addGem = {addGem} setSelectedItem = {setSelectedItem}/>} />
        <Route exact path = "/cart" render={(props) => <Cart {...props}  cart = {cart} addGem = {addGem} removeGem = {removeGem}/>} />
        <Route exact path = "/itemdesc" render={(props) => <ItemDesc {...props} addGem = {addGem} selectedItem = {selectedItem} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
