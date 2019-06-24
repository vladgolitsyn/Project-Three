import React, { Component } from "react";
import "./style.css";
import { Input, Button, Form, Icon, Container } from "semantic-ui-react";

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
        <Container style={{width: '60%', marginTop: '30px'}}>
          <Form onClick={this.handleFormSubmit}>
            <Form.Field>
              <Input
                action="Search"
                value={this.state.search}
                name="search"
                onChange={this.handleInputChange}
                placeholder="Find an event..."
                id="userInput"
                style={{height: '50px'}}
              />
            </Form.Field>
          </Form>
        </Container>
      </div>

    );
  }
}

export default SearchField;

