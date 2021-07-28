import React, { useState, useEffect } from "react";
import axios from "axios";

const Extras = (props) => {
  const [extrasOptions, setExtrasOptions] = useState([]);
  let running_price = props.totalPrice;

  useEffect(() => {
    getExtras();
  }, []);

  const getExtras = async () => {
    const response = await axios.get("http://localhost:8000/extras/");
    setExtrasOptions(response.data);
  };

  const handleChoice = (choice) => {
    props.setExtraChoice(choice);
    props.setTotalPrice((running_price += choice.Price));
    props.setExtraVis(false);
    props.setConfirmVis(true);
  };

  const extras = extrasOptions.map((extra) => (
    <div
      className="layout-card"
      onClick={() => {
        handleChoice(extra);
      }}
    >
      <div className="layout-title">
        <h4>{extra.Name}</h4>
      </div>
      <div className="layout-body">
        <p>{extra.Discription}</p>
      </div>
      <div className="layout-price">
        <h5>$ {extra.Price}</h5>
      </div>
    </div>
  ));

  return (
    <div className="layout-container">
      <div>
        <h2>extras</h2>
      </div>
      <div className="cards-container">{extras}</div>
      <div classname="total-price">
        <h3>Build Cost</h3>
        <h3>$ {props.totalPrice} </h3>
      </div>
    </div>
  );
};

export default Extras;
