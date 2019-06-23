import React, {Component} from "react";
import {Container, Comment, Form} from 'semantic-ui-react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";


class Chat extends Component{
        state = {
            message: '',
            messages: [],
        };
    
    componentDidMount() {
        console.log(this.props);
        const { socket } = this.props;
        
        socket.on('connect', () => {
            console.log('connected')
        });
        socket.on('new-message', message => {
            const { messages } = this.state;
            const udpatedMessages = [...messages, message];
            this.setState({ messages: udpatedMessages });
        });
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    sendMessage = e => {
        const { socket } = this.props;
        const {message} = this.state;
        this.setState({message})
        const user = this.props.auth.user.name;
        socket.emit('new-message', `${user}: ${message}`)
        console.log(this.state.message);
    }


    render() {
        return (
            <div>
                <div className="chat-header-h1">
                    <p className="chat-header-p">Event Name Chat Group</p>
                </div>

                <Container>
                <div className="event-chat-area">
                    {this.state.messages.map((message, index) => {
                        return ( 
                            <Comment key={index}>
                                <Comment.Content>     
                                    <Comment.Metadata>
                                    <div>Five days ago</div>
                                    </Comment.Metadata>
                                    <Comment.Text>{message}</Comment.Text>
                                </Comment.Content>
                            </Comment>
                        )
                    })}
                </div>
                </Container>

                <Container>
                <Form onSubmit={this.sendMessage} className="event-chat-form">
                    <Form.Input
                        placeholder='Message'
                        name='message'
                        value={this.state.message}
                        onChange={this.handleChange}
                        className="event-chat-input"
                        />
                    <Form.Button content='Send' className="event-chat-btn"  />
                </Form>
                </Container>

            </div>
        )
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