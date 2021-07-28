import React, { useState, useEffect } from "react";
import axios from "axios";

const Switches = (props) => {
  const [switchesOptions, setSwitchesOptions] = useState([]);
  let running_price = props.totalPrice;

  useEffect(() => {
    getSwitches();
  }, []);

  const getSwitches = async () => {
    const response = await axios.get("http://localhost:8000/switches/");
    setSwitchesOptions(response.data);
  };

  const handleChoice = (choice) => {
    props.setSwitchChoice(choice);
    props.setTotalPrice((running_price += choice.Price));
    props.setSwitchVis(false);
    props.setVis(true);
  };

  const switches = switchesOptions.map((switchs) => (
    <div
      className="layout-card"
      onClick={() => {
        handleChoice(switchs);
      }}
    >
      <div className="layout-title">
        <h4>{switchs.Name}</h4>
      </div>
      <div className="layout-body">
        <p>{switchs.Discription}</p>
      </div>
      <div className="layout-price">
        <h5>$ {switchs.Price}</h5>
      </div>
    </div>
  ));

  return (
    <div className="layout-container">
      <div>
        <h2>Switches</h2>
      </div>
      <div className="cards-container">{switches}</div>
      <div classname="total-price">
        <h3>Build Cost</h3>
        <h3>$ {props.totalPrice} </h3>
      </div>
    </div>
  );
};

export default Switches;
