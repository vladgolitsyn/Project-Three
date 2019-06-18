import React, { Component } from "react";
import API from "../utils/API";
import { Container, Button, Form } from 'semantic-ui-react'


export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
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
    API.saveUsers(newUser)
      .then(this.setState({ message: alert("Your book is saved") }))
      .then(this.props.history.push(`/login`))
      .catch(err => console.log(err));
  };



render() {

  return (
    <Container>
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Field>
          <label id="email-label" htmlFor="email">Confirm Email</label>
          <input id="email" type="email" placeholder='Confirm Email' />
        </Form.Field>
        <Form.Field>
          <label id="name-label" htmlFor ="name">Name</label>
          <input id="name" type="text" placeholder='Name' onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label id="lastName-label" htmlFor ="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder='Last Name' onChange={this.handleInputChange}  />
        </Form.Field>
        <Form.Field>
          <label id="password-label" htmlFor ="password">Password</label>
          <input type="password" name="password" placeholder='Password' onChange={this.handleInputChange}  />
        </Form.Field>

        <Button type='submit'>Sign Up</Button>
      </Form>
    </Container>
  )
}
};

export default Register;
