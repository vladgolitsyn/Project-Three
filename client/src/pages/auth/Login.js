import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
import "./style.css";
import { Button, Form, Container, Message, Header } from "semantic-ui-react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container fluid>
      <h1 className="login-h1">Let's get started</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            {!!errors.emailnotfound && (
              <Message
                color="red"
                icon="delete"
                header={errors.emailnotfound}
                content=""
              />
            )}
            <label></label>
            <input
              type="Email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              error={errors.emailnotfound}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            {!!errors.passwordincorrect && (
              <Message
                color="red"
                icon="delete"
                header={errors.passwordincorrect}
                content=""
              />
            )}
            <label></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              error={errors.passwordincorrect}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button className="btn-login" type="submit">
            Log in
          </Button>
          <Header className="login-h5" as="h5">
            <a href="/register">Register here</a>
          </Header>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

