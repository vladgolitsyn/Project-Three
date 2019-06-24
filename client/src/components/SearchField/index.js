import React, { Component } from "react";
import "./style.css";
import { Input, Button, Form, Menu, Dropdown } from "semantic-ui-react";

// handle(event)
// {
//   console.log(event.target)
// }

class SearchField extends Component {
  state = {
    search: ""
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
    this.setState({ search: "" });
    console.log("I am clicked");
  };
  render() {
    return (
      <div>
        <Form onClick={this.handleFormSubmit}>
          <Form.Field>
            <Input
              value={this.state.search}
              name="search"
              onChange={this.handleInputChange}
              placeholder="Search"
              id="userInput"
            />
          </Form.Field>
          <Button type="submit" value="Submit">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchField;
