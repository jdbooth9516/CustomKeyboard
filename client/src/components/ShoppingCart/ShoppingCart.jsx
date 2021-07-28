import axios from "axios";
import React, { useState, useEffect } from "react";

const ShoppingCart = (props) => {
  const [carts, setCarts] = useState([]);
  const userId = props.user.id;
  console.log(userId);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const response = await axios.get(`http://localhost:8000/cart/${userId}/`);
    setCarts(response.data);
  };

  const builds = carts.map((cart) => (
    <div>
      <h3 className="build-name">{cart.Build_name}</h3>
      <h5 className="build-price">{cart.Price}</h5>
    </div>
  ));

  return (
    <div>
      <div className="cart-title">My Cart</div>
      <div>{builds}</div>
    </div>
  );
};

export default ShoppingCart;
