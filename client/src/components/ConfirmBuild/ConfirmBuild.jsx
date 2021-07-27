import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./ConfirmBuild.css";

const ConfirmBuild = (props) => {
  const choices = {
    Name: "custom",
    Layout: props.layoutChoice.id,
    Switch: props.switchChoice.id,
    Services: props.serviceChoice.id,
    Extras: props.extraChoice.id,
  };

  const [build, setBuild] = useState(null);
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

      createCart(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const createCart = async (newBuild) => {
    const totalLenght = newBuild.length - 1;
    const cartBody = { User: props.user.id, Build: newBuild[totalLenght].id };
    try {
      const response = await axios.post(
        "http://localhost:8000/cart/",
        cartBody
      );
      setLoading(false);
      <Redirect to="/cart" />;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="confirm-container">
      {!loading ? (
        <div className="confirm-body">
          <div className="confirm-section">
            <h5>Layout</h5>
            <h6>{props.layoutChoice.Name}</h6>
          </div>
          <div className="confirm-section">
            <h5>Switch</h5>
            <h6>{props.switchChoice.Name}</h6>
          </div>
          <div className="confirm-section">
            <h5>Services</h5>
            <h6>{props.serviceChoice.Name}</h6>
          </div>
          <div className="confirm-section">
            <h5>Extras</h5>
            <h6>{props.extraChoice.Name}</h6>
          </div>
          <button
            className=" confirm-btn"
            onClick={() => {
              submitBuild();
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
