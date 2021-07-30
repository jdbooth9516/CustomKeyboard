import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import useForm from "../../UseForm/UseForm";

const SwitchUpdate = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    updateSwitchs(values);
  });
  const [switchs, setSwitchs] = useState([]);

  useEffect(() => {
    getSwitchs();
  }, []);

  const getSwitchs = async () => {
    const response = await axios.get("http://localhost:8000/switches/");
    setSwitchs(response.data);
    console.log(switchs);
  };

  function updateSwitchs(values) {
    async function sendUpdate(values) {
      const formatedBody = {
        Name: values.Name,
        Discription: values.Discription,
        Price: values.Price,
        Feel: values.Feel,
        Noise: values.Noise,
      };
      try {
        const response = await axios.put(
          `http://localhost:8000/switches/${values.id}/`,
          formatedBody
        );
        console.log(response.data);
        window.location.reload();
      } catch (error) {
        console.log(error.response);
      }
    }
    sendUpdate(values);
  }

  const formatedSwitchs = switchs.map((switchs) => (
    <div className="layout-view">
      <div className="layout-view-item">
        <h5>Product ID</h5>
        <p>{switchs.id}</p>
      </div>
      <div className="layout-view-item">
        <h5>Name</h5>
        <p>{switchs.Name}</p>
      </div>
      <div className="layout-view-item">
        <h5>Discription</h5>
        <p className="layout-view-item">{switchs.Discription}</p>
      </div>
      <div className="layout-view-item">
        <h5>Price</h5>
        <p>{switchs.Price}</p>
      </div>
      <div className="layout-view-item">
        <h5>Feel</h5>
        <p>{switchs.Feel}</p>
      </div>
      <div className="layout-view-item">
        <h5>Noise</h5>
        <p>{switchs.Noise}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div>{formatedSwitchs}</div>
      <div className="form-container">
        <Form>
          <FormGroup>
            <Label for="Username">Id</Label>
            <Input
              type="number"
              name="id"
              id="id"
              placeholder="id"
              defaultValue=""
              onChange={handleChange}
              value={values.id}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
              defaultValue=""
              onChange={handleChange}
              value={values.Name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Discription">Discription</Label>
            <Input
              type="text"
              name="Discription"
              id="Discription"
              placeholder="Discription"
              defaultValue=""
              onChange={handleChange}
              value={values.Discription}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Price">Price</Label>
            <Input
              type="number"
              name="Price"
              id="Price"
              placeholder="Price"
              defaultValue=""
              onChange={handleChange}
              value={values.Price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Feel">Feel</Label>
            <Input
              type="text"
              name="Feel"
              id="Feel"
              placeholder="Feel"
              defaultValue=""
              onChange={handleChange}
              value={values.Feel}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Noise">Noise</Label>
            <Input
              type="text"
              name="Noise"
              id="Noise"
              placeholder="Noise"
              defaultValue=""
              onChange={handleChange}
              value={values.Noise}
            />
          </FormGroup>
          <button onClick={handleSubmit} className="reg-submit">
            Update
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SwitchUpdate;
