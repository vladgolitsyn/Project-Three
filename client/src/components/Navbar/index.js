import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { connect } from "react-redux";
import logo from "../../logo/blacklogo.png";
import "./style.css";

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="menu-div">
        <Menu secondary className="menu">
          <Menu.Item
            className="logo"
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            <Image size="small" src={logo} />
          </Menu.Item>

          <Menu.Item
              name="event"
              as={Link}
              to="/events"
              active={activeItem === "event"}
              className="menu"
              position="right"
              onClick={this.handleItemClick}
              style={{marginTop: '8px'}}
              />


          {isAuthenticated ? (
            <Menu.Menu>

              <Menu.Item
                className="menu"
                onClick={this.handleItemClick}
                name="about"
                as={Link}
                to="/about"
                style={{marginTop: '8px'}}
              />

              <Menu.Item
                className="menu-link"
                onClick={this.handleItemClick}
                name="profile"
                as={Link}
                to="/profile"
                style={{marginTop: '8px'}}
              />

              <Menu.Item
                className="menu-link"
                onClick={this.handleItemClick}
                name="chat"
                as={Link}
                to="/chat"
                style={{marginTop: '8px'}}
              />

              <Logout className="menu-link" />
            </Menu.Menu>
          ) : (
            <Menu.Menu>
              <Menu.Item
                className="signin-link"
                name="SignIn"
                as={Link}
                to="/login"
                active={activeItem === "SignIn"}
                onClick={this.handleItemClick}
                style={{marginTop: '8px'}}
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
