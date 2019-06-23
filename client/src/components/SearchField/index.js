import React, { Component } from "react";
import "./style.css";
import { Input, Button, Form, Menu, Dropdown, Icon } from "semantic-ui-react";

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
        <Form onClick={this.handleFormSubmit} className="homepage-search-form">
          <Form.Field className="search-field">
            <div>
              <Input 
                action="Search"
                value={this.state.search}
                name="search"
                onChange={this.handleInputChange}
                placeholder="Artist...." 
                className="input search"
              />
              <Button icon className="btn">
                <Icon name='search' className="icon"/>
              </Button>
            </div>          
          </Form.Field>
        </Form>

    );
  }
}

export default SearchField;

