import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Container, Header, Icon } from "semantic-ui-react";

class Dashboard extends Component {
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
          </Header>
          <Button>Goin Group</Button>
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
