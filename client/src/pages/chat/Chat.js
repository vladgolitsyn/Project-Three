import React, {Component} from "react";
import {Header, Comment, Form} from 'semantic-ui-react';
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
                <Header as='h3' className="chat-header-h3">
                    Event Name Chat Group
                </Header>

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

                <Form onSubmit={this.sendMessage} className="event-chat-form">
                    <Form.Group>
                        <Form.Input
                            placeholder='Message'
                            name='message'
                            value={this.state.message}
                            onChange={this.handleChange}
                            className="event-chat-input"
                            />
                        <Form.Button content='Send' className="event-chat-btn"  />
                    </Form.Group>
                </Form>

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