import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import style from "./style.css";
import { Button, Form, Container, Header, Icon } from "semantic-ui-react";

class Dashboard extends Component {
  onClick = () => {
    this.props.history.push("/chat");
  };

  render() {
    const { user } = this.props.auth;
    const name = user.name
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    return (
      <div>
        <Container fluid>
          <Header as="h2" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content> Welcome, {name}</Header.Content>

            <Header.Content className="eventName"> Event Name</Header.Content>
            <Button className="eventGroup" onClick={this.onClick}>
              Go to Event Group
            </Button>
          </Header>
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
