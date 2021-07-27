import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import Switches from "../Switches/Switches";
import Services from "../Services/Services";
import Extras from "../Extras/Extras";
import ConfirmBuild from "../ConfirmBuild/ConfirmBuild";

const BuildForm = (props) => {
  // rendering hooks
  const [welcomeVis, setWelcomeVis] = useState(true);
  const [layoutVis, setLayoutVis] = useState(false);
  const [switchVis, setSwitchVis] = useState(false);
  const [servicesVis, setVis] = useState(false);
  const [keycapsVis, setKeycapsVis] = useState(false);
  const [extraVis, setExtraVis] = useState(false);
  const [confirmVis, setConfirmVis] = useState(false);

  //choices
  const [layoutChoice, setLayoutChoice] = useState({});
  const [switchChoice, setSwitchChoice] = useState({});
  const [serviceChoice, setServiceChoice] = useState({});
  const [extraChoice, setExtraChoice] = useState({});

  console.log(layoutChoice);

  return (
    <div>
      <div className="build-form-body">
        {welcomeVis ? (
          <div>
            <h1>Keyboard Builder</h1>
            <button
              onClick={() => {
                setWelcomeVis(false);
                setLayoutVis(true);
              }}
            >
              Start
            </button>
          </div>
        ) : null}
        <div className="buildform-container">
          {layoutVis ? (
            <Layout
              setLayoutChoice={setLayoutChoice}
              setLayoutVis={setLayoutVis}
              setSwitchVis={setSwitchVis}
            />
          ) : null}
          {switchVis ? (
            <Switches
              setSwitchChoice={setSwitchChoice}
              setSwitchVis={setSwitchVis}
              setVis={setVis}
            />
          ) : null}
          {servicesVis ? (
            <Services
              setServiceChoice={setServiceChoice}
              setVis={setVis}
              setExtraVis={setExtraVis}
            />
          ) : null}
          {extraVis ? (
            <Extras
              setExtraChoice={setExtraChoice}
              setExtraVis={setExtraVis}
              setConfirmVis={setConfirmVis}
            />
          ) : null}
          {confirmVis ? (
            <ConfirmBuild
              layoutChoice={layoutChoice}
              switchChoice={switchChoice}
              serviceChoice={serviceChoice}
              extraChoice={extraChoice}
              user={props.user}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BuildForm;
