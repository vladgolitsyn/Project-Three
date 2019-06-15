import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Container } from "semantic-ui-react";
import API from "../utils/API";

class Profile extends Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    API.postLoginUser().then(user => {
      console.log("[DEBUG] LOGIN SUCCESS");
      this.setState({ name: user.response.data.name });
    });
  }
  render() {
    return (
      <Container fluid>
        <h1>WELCOME</h1>
        <h1> {this.state.name}</h1>
      </Container>
    );
  }
}

export default Profile;
