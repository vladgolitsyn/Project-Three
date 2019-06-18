import React, {Component} from "react";
import socketIOClient from "socket.io-client";
import {Container, Header, Comment, Divider, Form} from 'semantic-ui-react';

class Chat extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            message: '',
            messages: []
        }
    }

    componentDidMount() {
        const socket = socketIOClient('http://localhost:3001');
        socket.on('server-message', message => {
            const { messages } = this.state;
            const updatedMessages = [...messages, message];
            this.setState({ messages: updatedMessages});
         })
        // socket.on('connect', () => {
        //     console.log('connected')
        // })
    }


    handleChange = e => {
        // const {name, value} = e.target;
        this.setState({[e.target.name]: e.target.value})
    }

    sendMessage = e => {
        const socket = socketIOClient('http://localhost:3001');
   `     const {name, message} = this.state;
        this.setState({name, message})`
        socket.on('new-message', (message) => {
            console.log(message);
        })
        console.log("Clicked");
    }


    render() {
        return (
            <div>
                <Container>
                    <div>Placeholder name: Szewah</div>
                    <Header as='h3' dividing>
                        Chats
                    </Header>

                    <div className="messages">
                        {this.state.messages.map(message => {
                            return ( 
                                <Comment>
                                    <Comment.Content>     
                                        {/* <Comment.Author>Name: {this.state.name}</Comment.Author> */}
                                        <Comment.Text>Message: {message}</Comment.Text>
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
