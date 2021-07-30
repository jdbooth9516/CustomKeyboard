import React from "react";
import useForm from "../UseForm/UseForm";
import axios from "axios";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./Registration.css";

const Registration = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    registerUser(values);
  });

  function registerUser(values) {
    async function addUserToDatabase(values) {
      values.Role = "customer";
      try {
        const response = await axios.post(
          "http://localhost:8000/users/",
          values
        );
        //NEED TO ADD A REDIRECT TO LOGIN HERE.
        console.log(values);
        window.location.href = "/login";
      } catch (error) {
        console.log(error.response.data);
      }
    }
    addUserToDatabase(values);
  }

  return (
    <div>
      <div className="form-container">
        <Form>
          <FormGroup>
            <Label for="Name">Full Name</Label>
            <Input
              type="text"
              name="Name"
              id="Name"
              placeholder="Full Name"
              defaultValue=""
              onChange={handleChange}
              value={values.Name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Username">UserName</Label>
            <Input
              type="text"
              name="Username"
              id="UserName"
              placeholder="Create A Username"
              defaultValue=""
              onChange={handleChange}
              value={values.Username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="Password"
              id="Password"
              placeholder="Create A Password"
              defaultValue=""
              onChange={handleChange}
              value={values.Password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Role">Status</Label>
            <Input
              type="text"
              name="Role"
              id="Role"
              placeholder="Customer"
              defaultValue="Customer"
              value="Customer"
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="Phonenumber">Phone-Number</Label>
            <Input
              type="text"
              name="Phonenumber"
              id="Phonenumber "
              placeholder="555-555-5555"
              defaultValue=""
              onChange={handleChange}
              value={values.Phonenumber}
            />
            <button onClick={handleSubmit} className="reg-submit">
              Submit
            </button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
