import React, {Component} from "react";
// import socketIOClient from "socket.io-client";
import {Container, Header, Comment, Divider, Form} from 'semantic-ui-react';

class Chat extends Component{
    // constructor(props) {
    //     super(props)

        state = {
            name: '',
            message: '',
            messages: []
        };
    // }
     // socket = null;


    
    componentDidMount() {
        const { socket } = this.props;

        // this.socket = socketIOClient('http://localhost:3001', {
        //     transports: ['websocket']
        //   });
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
        // const {name, value} = e.target;
        this.setState({[e.target.name]: e.target.value})
    }

    sendMessage = e => {
        const { socket } = this.props;
        const {name, message} = this.state;
        this.setState({name, message})
        const user = 'user1';
        socket.emit('new-message', `${user}: ${message}`)
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
                        {this.state.messages.map((message, index) => {
                            return ( 
                                <Comment key={index}>
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
