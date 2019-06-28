import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Input, Form, Container } from "semantic-ui-react";
import "./style.css";

// handle(event)
// {
//   console.log(event.target)
// }

class SearchField extends Component {
  state = {
    search: "",
    redirect: false
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(event.target.value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    this.setState({ redirect: true });
    console.log("I am clicked");
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/events/${this.state.search}`}/>;
    }
    return (
      <div>
        <Container style={{ width: "60%", marginTop: "30px" }}>
          <input 
            type="text" 
            value={this.state.search} 
            name="search" 
            onChange={this.handleInputChange}
            placeholder="Find an event..."
            id="userInput"
            style={{ height: "50px" }}
            />
          <button onClick={this.handleFormSubmit}>Find</button>
        </Container>
      </div>
    );
  }
}

export default SearchField;
