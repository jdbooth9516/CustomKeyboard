import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Layout.css";

const Layout = (props) => {
  const [layoutOptions, setLayoutOptions] = useState([]);
 
  const [fadeOut, setFadeOut] = useState("");
  let running_price = props.totalPrice

  useEffect(() => {
    getLayouts();
  }, []);

  const getLayouts = async () => {
    const response = await axios.get("http://localhost:8000/layouts/");
    setLayoutOptions(response.data);
  };

  const handleChoice = (choice) => {
    setFadeOut("fade-out")
    props.setLayoutChoice(choice);
    props.setTotalPrice(running_price += choice.Price);
    props.setLayoutPrice(choice.Price)
    setTimeout( () => {props.setLayoutVis(false);
    props.setSwitchVis(true)}, 500);
  };

  const goBack = () => { 
    props.setLayoutVis(false);
    props.setWelcomeVis(true);
  }

  const layouts = layoutOptions.map((layout, index) => (
    <div
      className="layout-card"
      onClick={() => {
        handleChoice(layout);
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
        <h4>{layout.Name}</h4>
      </div>
      <div className="layout-body">
        <p>{layout.Discription}</p>
      </div>
      
      <div className="layout-hidden" id={`hidding-${index}`}>
        <h6>More Information:</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sit, consequatur nobis eveniet voluptatum voluptatem ab temporibus fugiat eius mollitia!</p>
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
        
        <div className={`cards-container`} >{layouts}</div>
        <div className="total-price"> 
          <h3>Build Cost</h3>  
          <h3>$ {props.totalPrice} </h3>
        </div>
       
        <div><button className="goback-btn" onClick={() => {goBack()}}>Go Back</button></div>
      </div>
  );
};

export default Layout;
