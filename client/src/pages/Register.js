import React, { Component } from "react";
import API from "../utils/API";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import "./style.css";
export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    message: " ",
    error: " "
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    if (newUser.password !== newUser.password2) {
      this.setState({ message: alert("password does not match") });
    } else {
      API.saveUsers(newUser)
        .then(this.setState({ message: alert("Registration complete") }))
        .then(this.props.history.push(`/login`))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Full Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>email</label>
            <input
              type="Email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              placeholder="Confirm Password"
              value={this.state.password2}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Register</Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
