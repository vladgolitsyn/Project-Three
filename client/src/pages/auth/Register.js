import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
// import classnames from "classnames";
import "./style.css";
import {
  Button,
  Checkbox,
  Form,
  Container,
  Message,
  Header
} from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container fluid>
      <h1 className="login-h1">Let's get started</h1>
        <Form 
          onSubmit={this.onSubmit}
          className="registration-form"
          style={{width: '30%', marginTop: '50px'}}
          >
          <Form.Field>
            {!!errors.name && (
              <Message
                color="red"
                icon="delete"
                header={errors.name}
                content=""
              />
            )}
            <label></label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Full Name"
              value={this.state.name}
              error={errors.name}
              onChange={this.onChange}
              style={{height: '40px'}}
            />
          </Form.Field>
          <Form.Field>
            {!!errors.email && (
              <Message
                color="red"
                icon="delete"
                header={errors.email}
                content=""
              />
            )}
            <label></label>
            <input
              type="Email"
              id="email"
              placeholder="Enter Email"
              value={this.state.email}
              error={errors.email}
              onChange={this.onChange}
              style={{height: '40px'}}
            />
          </Form.Field>
          <Form.Field>
            {!!errors.password && (
              <Message
                color="red"
                icon="delete"
                header={errors.password}
                content=""
              />
            )}
            <label></label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={this.state.password}
              error={errors.password}
              onChange={this.onChange}
              style={{height: '40px'}}
            />
          </Form.Field>
          <Form.Field>
            {!!errors.password2 && (
              <Message
                color="red"
                icon="delete"
                header={errors.password2}
                content=""
              />
            )}
            <label></label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm Password"
              value={this.state.password2}
              error={errors.password2}
              onChange={this.onChange}
              style={{height: '40px'}}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button negative 
            className="btn-register"
            type="submit"
            style={{height: '40px', marginBottom: '25px'}}
          >
            Register
          </Button >
          <Header 
            as="h5"
            style={{textAlign: 'center'}}
          >
            <a href="/login">Login here</a>
          </Header>
        </Form>
      </Container>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
