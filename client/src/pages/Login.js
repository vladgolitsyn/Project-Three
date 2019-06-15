import React, { Component } from "react";
import API from "../utils/API";
import { Button, Form, Container, Message } from "semantic-ui-react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("[DEBUG] SUBMIT LOGIN FORM");

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    API.postLoginUser(user)
      .then(() => {
        console.log("[DEBUG] LOGIN SUCCESS");
        this.setState({ message: alert("Loged in complete"), error: "" });
      })
      .then(() => this.props.history.push(`/profile`))
      .catch(err => {
        // console.log("[DEBUG] LOGIN ERROR", err.response.data.error);
        this.setState({ error: err.response.data.error });
      });
  };

  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.handleFormSubmit}>
          {!!this.state.error && (
            <Message
              color="red"
              icon="delete"
              header={this.state.error}
              content=""
            />
          )}
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
          <Button type="submit">Log in</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
