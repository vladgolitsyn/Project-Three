import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { connect } from "react-redux";
class Nav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            as={Link}
            to="/"
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
          {isAuthenticated ? (
            <Logout />
          ) : (
            <Menu.Menu position="right">
              <Menu.Item
                name="SignIn"
                as={Link}
                to="/login"
                active={activeItem === "SignIn"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          )}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Nav);
