import React, { Component, Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import { registerUser } from "../actions/authActions";
// import { loginUser } from "../actions/authActions";
import PropTypes from "prop-types";

export class Logout extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return <Menu.Item onClick={this.onLogoutClick}>Logout</Menu.Item>;
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout);
