    
import React, {Component} from "react";
import socketIOClient from "socket.io-client";
import {Container, Header, Comment, Divider, Form} from 'semantic-ui-react';

class Chat extends Component{
    socket = null;

    state = {
        name: '',
        message: '',
        messages: []
    };
    
    componentDidMount() {
        this.socket = socketIOClient('http://localhost:3001', {
            transports: ['websocket']
          });
        this.socket.on('connect', () => {
            console.log('connected')
        });

        this.socket.on('new-message', message => {
            const { messages } = this. state;
            const udpatedMessages = [...messages, message];
            this.setState({ messages: udpatedMessages });
        });
    }


    handleChange = e => {
        // const {name, value} = e.target;
        this.setState({[e.target.name]: e.target.value})
    }

    sendMessage = e => {
        const {name, message} = this.state;
        this.setState({name, message})
        const user = 'user1';
        this.socket.emit('new-message', `${user}: ${message}`)
        console.log(this.state.message);
    }


    render() {
        return (
            <div>
                <Container>
                    <Header as='h3' dividing>
                        Chats
                    </Header>

                    <div className="messages">
                        {this.state.messages.map(message => {
                            return ( 
                                <Comment>
                                    <Comment.Content>     
                                        {/* <Comment.Author>Name: {this.state.name}</Comment.Author> */}
                                        <Comment.Text>{message}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            )
                        })}
                    </div>

                    <Divider/>

                    <Form onSubmit={this.sendMessage}>
                        <Form.Group>
                            <Form.Input
                                placeholder='Message'
                                name='message'
                                value={this.state.message}
                                onChange={this.handleChange}
                                />
                            <Form.Button content='Send' />
                        </Form.Group>
                    </Form>

                </Container>

            </div>
        )
    }
}

export default Chat;