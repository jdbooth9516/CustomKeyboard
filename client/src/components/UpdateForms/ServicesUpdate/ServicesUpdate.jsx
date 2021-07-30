import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import useForm from "../../UseForm/UseForm";

const ServicesUpdate = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    updateServices(values);
  });
  const [services, setServices] = useState([]);

  useEffect(() => {
    getSevices();
  }, []);

  const getSevices = async () => {
    const response = await axios.get("http://localhost:8000/services/");
    setServices(response.data);
    console.log(services);
  };

  function updateServices(values) {
    async function sendUpdate(values) {
      const formatedBody = {
        Name: values.Name,
        Discription: values.Discription,
        Price: values.Price,
      };
      try {
        const response = await axios.put(
          `http://localhost:8000/services/${values.id}/`,
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

  const formatedServices = services.map((service) => (
    <div className="layout-view">
      <div className="layout-view-item">
        <h5>Product ID</h5>
        <p>{service.id}</p>
      </div>
      <div className="layout-view-item">
        <h5>Name</h5>
        <p>{service.Name}</p>
      </div>
      <div className="layout-view-item">
        <h5>Discription</h5>
        <p className="layout-view-item">{service.Discription}</p>
      </div>
      <div className="layout-view-item">
        <h5>Price</h5>
        <p>{service.Price}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div>{formatedServices}</div>
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

          <button onClick={handleSubmit} className="reg-submit">
            Update
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ServicesUpdate;
