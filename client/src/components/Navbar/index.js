import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { connect } from "react-redux";
class Navbar extends Component {
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
            name="event"
            as={Link}
            to="/events"
            active={activeItem === "event"}
            onClick={this.handleItemClick}
          />

          {isAuthenticated ? (
            <Menu.Menu>
              <Menu.Item
                name="profile"
                as={Link}
                to="/profile"
                active={activeItem === "profile"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="chat"
                as={Link}
                to="/chat"
                active={activeItem === "chat"}
                onClick={this.handleItemClick}
              />
              <Logout />
            </Menu.Menu>
          ) : (
            <Menu.Menu>
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
)(Navbar);
