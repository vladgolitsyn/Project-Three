import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            as={Link}
            to="/home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about"
            as={Link}
            to="/about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            active={activeItem === "register"}
            onClick={this.handleItemClick}
            as={Link}
            name="register"
            to="/register"
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              as={Link}
              to="/logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
