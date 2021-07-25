import React from "react";
import useForm from "../UseForm/UseForm";
import axios from "axios";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

const Registration = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    registerUser(values);
  });

  function registerUser(values) {
    async function addUserToDatabase(values) {
      try {
        const response = await axios.post(
          "http://localhost:8000/users/",
          values
        );
      } catch (error) {
        console.log(error.response.data);
      }
    }
    addUserToDatabase(values);
  }

  return (
    <div className="form-container">
      <Form>
        <FormGroup>
          <Label for="Name">Full Name</Label>
          <Input type="text" name="Name" id="Name" placeholder="Full Name" />
        </FormGroup>
        <FormGroup>
          <Label for="Username">Email</Label>
          <Input
            type="text"
            name="Username"
            id="UserName"
            placeholder="Create A Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="Password"
            id="Password"
            placeholder="Create A Password" 
          />
        </FormGroup>
        <FormGroup>
          <Label for="Role">Status</Label>
          <Input
            type="text"
            name="Role"
            id="Role"
            placeholder="Customer"
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
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Registration;
