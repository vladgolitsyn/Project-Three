import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./style.css";

class SearchField extends Component {
  state = {
    search: "",
    redirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() });
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
      return (
        <Redirect to={`/events/${this.state.search.split(" ").join("+")}`} />
      );
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
            style={{ height: "50px", width: "100%", textAlign: "center" }}
          />
          <div
            className="btncontainer"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              onClick={this.handleFormSubmit}
              style={{
                width: "20%",
                margin: "20px auto",
                height: "40px",
                borderRadius: "5px",
                background: "purple",
                color: "white"
              }}
            >
              Search
            </button>
          </div>
        </Container>
      </div>
    );
  }
}

export default SearchField;
