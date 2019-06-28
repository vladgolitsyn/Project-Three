import React, { Component } from "react";
import { Container, Comment, Form } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";
import Footer from "../../components/Footer";
import io from "socket.io-client";

class Chat extends Component {
  socket = null;

  state = {
    message: "",
    messages: []
  };

  componentDidMount() {
    this.socket = io.connect("http://localhost:3001");
    // console.log(this.props);
    // const {socket} = this.props;
    // console.log(socket);
    this.socket.on("connect", data => {
      console.log("This is the chat socket connection ", data);
    });

    this.socket.on("new-message", message => {
      const { messages } = this.state;
      const udpatedMessages = [...messages, message];
      this.setState({ messages: udpatedMessages });
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  sendMessage = e => {
    // const { socket } = this.props;
    const { message } = this.state;
    this.setState({ message });
    const user = this.props.auth.user.name;
    this.socket.emit("new-message", `${user}: ${message}`);
    console.log(this.state.message);
    this.setState({message: ''});
  };

  render() {
    return (
      <div>
        <div className="chat-header-h1">
          <p className="chat-header-p">Event Name Chat Group</p>
        </div>

        <Container style={{ marginTop: "30px" }}>
          <div className="event-chat-area">
            {this.state.messages.map((message, index) => {
              return (
                <Comment key={index}>
                  <Comment.Content style={{ margin: "10px" }}>
                    <Comment.Text>{message}</Comment.Text>
                  </Comment.Content>
                </Comment>
              );
            })}
          </div>
        </Container>

        <Container style={{ marginTop: "5px" }}>
          <Form onSubmit={this.sendMessage} className="event-chat-form">
            <Form.Input
              placeholder="Message"
              name="message"
              value={this.state.message}
              className="event-chat-input"
              style={{ height: "50px" }}
              onChange={this.handleChange}
            />
            <Form.Button
              content="+"
              className="event-chat-btn"
              style={{ background: "purple", color: "white" }}
            />
          </Form>
        </Container>
        <Footer style={{ bottom: "0" }} />
      </div>
    );
  }
}

// export default Chat;
Chat.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Chat);
