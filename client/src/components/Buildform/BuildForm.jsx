import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Switches from "../Switches/Switches";
import Services from "../Services/Services";
import Extras from "../Extras/Extras";
import ConfirmBuild from "../ConfirmBuild/ConfirmBuild";
import { Form, FormGroup, Label, Input } from "reactstrap";
import useForm from "../UseForm/UseForm";
import "./BuildForm.css";

const BuildForm = (props) => {
  // rendering hooks
  const [welcomeVis, setWelcomeVis] = useState(true);
  const [layoutVis, setLayoutVis] = useState(false);
  const [switchVis, setSwitchVis] = useState(false);
  const [servicesVis, setVis] = useState(false);
  const [extraVis, setExtraVis] = useState(false);
  const [confirmVis, setConfirmVis] = useState(false);

  //choices
  const [nameChoice, setNameChoice] = useState("");
  const [layoutChoice, setLayoutChoice] = useState({});
  const [switchChoice, setSwitchChoice] = useState({});
  const [serviceChoice, setServiceChoice] = useState({});
  const [extraChoice, setExtraChoice] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const { values, handleChange, handleSubmit } = useForm(() => {
    getName(values);
  });

  function getName(values) {
    setNameChoice(values.Name);
    setWelcomeVis(false);
    setLayoutVis(true);
  }

  console.log(nameChoice);

  return (
    <div>
      <div className="build-form-body">
        {welcomeVis ? (
          <div>
            <div>
              <h1>Keyboard Builder</h1>
            </div>
            <div className="name-container">
              <Form>
                <FormGroup>
                  <Label for="Name"> Build Name</Label>
                  <Input
                    type="text"
                    name="Name"
                    id="Name"
                    placeholder="Build Name"
                    defaultValue=""
                    onChange={handleChange}
                    value={values.Name}
                  />
                </FormGroup>
                <button onClick={handleSubmit}>Start</button>
              </Form>
            </div>
          </div>
        ) : null}
        <div className="buildform-container">
          {layoutVis ? (
            <Layout
              setLayoutChoice={setLayoutChoice}
              setLayoutVis={setLayoutVis}
              setSwitchVis={setSwitchVis}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ) : null}
          {switchVis ? (
            <Switches
              setSwitchChoice={setSwitchChoice}
              setSwitchVis={setSwitchVis}
              setVis={setVis}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ) : null}
          {servicesVis ? (
            <Services
              setServiceChoice={setServiceChoice}
              setVis={setVis}
              setExtraVis={setExtraVis}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ) : null}
          {extraVis ? (
            <Extras
              setExtraChoice={setExtraChoice}
              setExtraVis={setExtraVis}
              setConfirmVis={setConfirmVis}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ) : null}
          {confirmVis ? (
            <ConfirmBuild
              nameChoice={nameChoice}
              layoutChoice={layoutChoice}
              switchChoice={switchChoice}
              serviceChoice={serviceChoice}
              extraChoice={extraChoice}
              user={props.loggedInUser}
              totalPrice={totalPrice}
              getCart={props.getCart}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BuildForm;
