import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
import "./style.css";
import { Button, Form, Container, Message, Header, Input } from "semantic-ui-react";

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
      <div>
        <h3
          style={{
            marginTop: "120px",
            textAlign: "center",
            fontWeight: "lighter"
          }}
        >
          Welcome back!
        </h3>
        <Container style={{display: 'flex', justifyContent:'center'}}>
        <Form
          onSubmit={this.onSubmit}
          className="login-form"
          style={{width: "50%", marginBottom:'20px'}}
        >
          <Form.Field>
            {!!errors.email && (
              <Message
                color="red"
                header={errors.email}
                content=""
              />
            )}
            {!!errors.emailnotfound && (
              <Message color="red" header={errors.emailnotfound} content="" />
            )}
            <label />
            <Input
              type="Email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              error={errors.emailnotfound}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            {!!errors.password && (
              <Message
                color="red"
                header={errors.password}
                content=""
              />
            )}
            {!!errors.passwordincorrect && (
              <Message
                color="red"
                header={errors.passwordincorrect}
                content=""
              />
            )}
            <label />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              error={errors.passwordincorrect}
              onChange={this.onChange}
            />
          </Form.Field>
          <Container style={{display: 'flex', justifyContent:'center'}}>
            <Button
              className="btn-login"
              type="submit"
              style={{ height: "50px"}}
            >
              Log in
            </Button>
            </Container>
          <Header as="h5" style={{ textAlign: "center"}}>
            <a href="/register">Register here</a>
          </Header>
        </Form>
        </Container>
      </div>
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
