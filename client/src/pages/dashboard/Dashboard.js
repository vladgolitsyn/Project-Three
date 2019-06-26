import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../utils/API";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import { createEventGroup } from "../../actions/groupActions";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    this.loadUserGroups(this.props.auth.user.id);
    if (this.props.eventChatBeingJoined) {
      console.log("[DEBUG] group event", this.props.eventChatBeingJoined);
      API.createGroup({
        ...this.props.eventChatBeingJoined,
        userId: this.props.auth.user.id
      }).then(data => this.loadUserGroups(this.props.auth.user.id));
    }
  }

  loadUserGroups = id => {
    API.getAllGroups(id)
      .then(res => {
        this.setState({
          groups: res.data.groups
        });
      })
      .catch(err => console.log(err));
  };

  onClick = event => {
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

            <Header.Content> Event Name</Header.Content>
            {this.state.groups.map(group => {
              return <Header.Content>{group.name}</Header.Content>;
            })}
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
  createEventGroup: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // groupChat: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  eventChatBeingJoined: state.eventChatBeingJoined
});

export default connect(
  mapStateToProps,
  { createEventGroup }
)(Dashboard);
