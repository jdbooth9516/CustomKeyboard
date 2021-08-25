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
    props.setSwitchPrice(choice.Price);
    props.setSwitchVis(false);
    props.setVis(true);
  };

  const goBack = () => { 
    let newTotal = props.totalPrice
    props.setTotalPrice(newTotal -= props.layoutPrice)
    setTimeout ( () => {props.setSwitchVis(false);
    props.setLayoutVis(true)}, 500);
  }


  const switches = switchesOptions.map((switchs, index) => (
    <div
      className="layout-card"
      onClick={() => {
        handleChoice(switchs);
      }}
      onMouseEnter = {()=> {
        const unhide = document.getElementById(`hidding-${index}`)
        unhide.style.display = "block"; 
      }}

      onMouseLeave = {() => { 
        const hide = document.getElementById(`hidding-${index}`)
        hide.style.display = 'none';
      }}
    >
      <div className="layout-title">
        <h4>{switchs.Name}</h4>
      </div>
      <div className="layout-body">
        <p>{switchs.Discription}</p>
      </div>
      <div className="layout-hidden" id={`hidding-${index}`}>
        <h6>More Information:</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sit, consequatur nobis eveniet voluptatum voluptatem ab temporibus fugiat eius mollitia!</p>
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
      <div className={`cards-container`}>{switches}</div>
      <div classname="total-price">
        <h3>Build Cost</h3>
        <h3>$ {props.totalPrice} </h3>
      </div>
      <div><button className="goback-btn" onClick={() => {goBack()}}>Go Back</button></div>
    </div>
  );
};

export default Switches;
