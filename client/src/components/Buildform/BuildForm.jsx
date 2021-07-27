import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";

const BuildForm = () => {
  // rendering hooks
  const [layoutVis, setLayoutVis] = useState(false);
  const [switchVis, setSwitchVis] = useState(false);
  const [servicesVis, setVis] = useState(false);
  const [keycapsVis, setKeycapsVis] = useState(false);
  const [extrasVis, setExtraVis] = useState(false);

  //choices
  const [layoutChoice, setLayoutChoice] = useState({});

  console.log(layoutChoice);

  return (
    <div>
      <div className="build-form-body">
        {layoutVis == false && (
          <div>
            <h1>Keyboard Builder</h1>
            <button
              onClick={() => {
                setLayoutVis(true);
              }}
            >
              Start
            </button>
          </div>
        )}
        <div className="buildform-container">
          {layoutVis ? (
            <Layout
              setLayoutChoice={setLayoutChoice}
              setLayoutVis={setLayoutVis}
              setSwitchVis={setSwitchVis}
            />
          ) : null}
          {swtichVis ? (
            <Layout
              setLayoutChoice={setLayoutChoice}
              setSwitchVis={setSwitchVis}
              setVis={setVis}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BuildForm;
