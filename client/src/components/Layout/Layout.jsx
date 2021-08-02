import React, { useState, useEffect } from "react";
import {Fade} from "@material-ui/core/";
import axios from "axios";
import "./Layout.css";

const Layout = (props) => {
  const [layoutOptions, setLayoutOptions] = useState([]);
  let fadeTrigger = true;
  let running_price = props.totalPrice

  useEffect(() => {
    getLayouts();
    fadeTrigger = true;
  }, []);

  const getLayouts = async () => {
    const response = await axios.get("http://localhost:8000/layouts/");
    setLayoutOptions(response.data);
  };

  const handleChoice = (choice) => {
    props.setLayoutChoice(choice);
    props.setTotalPrice(running_price += choice.Price);
    props.setLayoutPrice(choice.Price)
    props.setLayoutVis(false);
    props.setSwitchVis(true);
  };

  const goBack = () => { 
    
    props.setLayoutVis(false);
    props.setWelcomeVis(true);
  }

  const layouts = layoutOptions.map((layout) => (
    <div
      className="layout-card"
      onClick={() => {
        handleChoice(layout);
      }}
    >
      <div className="layout-title">
        <h4>{layout.Name}</h4>
      </div>
      <div className="layout-body">
        <p>{layout.Discription}</p>
      </div>
      <div className="layout-price">
        <h5>$ {layout.Price}</h5>
      </div>
    </div>
  ));

  return (
    <div className="layout-container">
      <div>
        <h2>Layouts</h2>
      </div>
      <div className="cards-container">{layouts}</div>
      <div className="total-price"> 
        <h3>Build Cost</h3>  
        <h3>$ {props.totalPrice} </h3>
      </div>
      <div><button className="goback-btn" onClick={() => {goBack()}}>Go Back</button></div>
    </div>
  );
};

export default Layout;
