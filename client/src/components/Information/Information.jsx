import React, { useState, useEffect, useRef } from "react";
import "./Information.css";

const Information = () => {
  const mainRef = useRef(null);
  const [layout, setLayout] = useState(false);
  const [switches, setSwitches] = useState(false);
  const [services, setServices] = useState(false);
  const [keycaps, setKeycaps] = useState(false);

  const closeAll = () => {
    setLayout(false);
    setSwitches(false);
    setServices(false);
    setKeycaps(false);
  };

  useEffect(() => {
    mainRef.current.focus();
  }, []);

  return (
    <div ref={mainRef} tabIndex="-1" className="information-container">
      <div className="info-tabs">
        <button onClick={() => (closeAll(), setLayout(true))}>Layout</button>
        <button onClick={() => (closeAll(), setSwitches(true))}>
          Switches
        </button>
        <button onClick={() => (closeAll(), setServices(true))}>
          Services
        </button>
        <button onClick={() => (closeAll(), setKeycaps(true))}>Keycaps</button>
      </div>
      {layout ? (
        <div className="info-sections">
          <h5>Layouts</h5>
          <div>layout1</div>
          <div>layout2</div>
          <div>layout3</div>
          <div>layout4</div>
          <div>layout5</div>
        </div>
      ) : null}
      {switches ? (
        <div className="info-sections">
          <h5>switches</h5>
          <div>switches 1</div>
          <div>switches 2</div>
          <div>switches 3</div>
          <div>switches 4</div>
          <div>switches 5</div>
        </div>
      ) : null}
      {services ? (
        <div className="info-sections">
          <h5>services</h5>
          <div>services 1</div>
          <div>services 2</div>
          <div>services 3</div>
          <div>services 4</div>
          <div>services 5</div>
        </div>
      ) : null}
      {keycaps ? (
        <div className="info-sections">
          <h5>keycaps</h5>
          <div>keycaps 1</div>
          <div>keycaps 2</div>
          <div>keycaps 3</div>
          <div>keycaps 4</div>
          <div>keycaps 5</div>
        </div>
      ) : null}
    </div>
  );
};

export default Information;
