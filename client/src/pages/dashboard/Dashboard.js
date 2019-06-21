import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import io from "socket.io-client";
import style from "./style.css";
import { Redirect } from 'react-router-dom'
import { Button, Form, Container, Header, Icon } from "semantic-ui-react";

class Dashboard extends Component {
  socket = null;

  state = {
    redirect: false
  }

  componentDidMount() {
    const {socket} = this.props;
    socket.on('connect', () => {
        console.log('connected')
    });
      // this.socket.on('new-message', message => {
      //     const { messages } = this.state;
      //     const udpatedMessages = [...messages, message];
      //     this.setState({ messages: udpatedMessages });
      // });
  }

  
  onClick = () => {
    // this.props.history.push("/chat");
    // this.joinRoom();
    console.log(this.props)
    const name = this.props.auth.user.name

    this.setRedirect();
    const {socket} = this.props;
    socket.emit("join", name)
  };

  // joinRoom = () => {
  //   const {socket} = this.props;
  //   socket.emit("join", "you have joined")
  // }

  setRedirect = () => {
    this.setState({redirect: true})
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={'/chat'} />
    }
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
