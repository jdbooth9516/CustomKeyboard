import axios from "axios";
import React, { useState, useEffect } from "react";
import Checkout from "../Checkout/Checkout";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const [checkoutVis, setCheckoutVis] = useState(false);
  const [selectedBuild, setSelectedBuild] = useState({});
  const carts = props.carts;

  useEffect(() => {
    console.log(carts);
  }, []);

  const openCart = (cart) => {
    console.log(cart);
    setSelectedBuild(cart);
    setCheckoutVis(true);
  };

  const deleteCart = async(cart) =>{
    try { 
      const response = await axios.delete(`http://localhost:8000/cart/delete/${cart.id}/`)
      const responseBuild = await axios.delete(`http://localhost:8000/build/${cart.Build}/`)
      alert("Item deleted")
    } catch (error) { 
      console.log(error.response);
    }
  }

  const builds = carts.map((cart) => (
    <div className="build-card">
      <h3 className="build-name">{cart.Build_name}</h3>
      <h5 className="build-price">{cart.Price}</h5>
      <button
        className="select-btn"
        onClick={() => {
          openCart(cart);
        }}
      >
        Order Build
      </button>
      <button className="delete-btn" onClick={() => {deleteCart(cart)}}>delete</button>
    </div>
  ));

  return (
    <div>
      <div className="cart-title">My Cart</div>
      {!checkoutVis ? <div className="card-container">{builds}</div> : null}
      <div className="shopping-container"></div>
      {checkoutVis ? (
        <Checkout cart={selectedBuild} setCheckoutVis={setCheckoutVis} />
      ) : null}
    </div>
  );
};

export default ShoppingCart;
