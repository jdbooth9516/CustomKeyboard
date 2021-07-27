import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const ConfirmBuild = (props) => {
  const choices = {
    Name: "custom",
    Layout: props.layoutChoice.id,
    Switch: props.switchChoice.id,
    Services: props.serviceChoice.id,
    Extras: props.extraChoice.id,
  };

  const [build, setBuild] = useState({});
  const [loading, setLoading] = useState(false);

  const submitBuild = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/build/",
        choices
      );
      setLoading(true);
      getBuildId();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getBuildId = async () => {
    try {
      const response = await axios.get("http://localhost:8000/build/");
      setBuild(response.data);
      console.log(response.data);
      setTimeout(() => {
        createCart(build);
      }, 1000);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const createCart = async () => {
    const cartBody = { User: props.user.id, Build: build[1].id };
    const formatedBody = JSON.stringify(cartBody);
    console.log(formatedBody);
    try {
      const response = await axios.post(
        "http://localhost:8000/cart/",
        cartBody
      );
      <Redirect to="/cart" />;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="confirm-container">
      {loading ? (
        <div className="confirm-body">
          <div>
            <h5>Layout</h5>
            <h6>{props.layoutChoice.Name}</h6>
          </div>
          <div>
            <h5>Switch</h5>
            <h6>{props.switchChoice.Name}</h6>
          </div>
          <div>
            <h5>Services</h5>
            <h6>{props.serviceChoice.Name}</h6>
          </div>
          <div>
            <h5>Extras</h5>
            <h6>{props.extraChoice.Name}</h6>
          </div>
          <button
            onClick={() => {
              createCart();
            }}
          >
            Confirm
          </button>
        </div>
      ) : (
        <div>
          <h3>Creating Cart..... </h3>
        </div>
      )}
    </div>
  );
};

export default ConfirmBuild;
