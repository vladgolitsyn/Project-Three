import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../utils/API";
import "./style.css";
import { Redirect } from "react-router-dom";
import { Button, Card, Container, Image, Header } from "semantic-ui-react";
import Footer from "../../components/Footer";
import Profile from "../../images/profile.png";
import { createEventGroup } from "../../actions/groupActions";

class Dashboard extends Component {
  socket = null;
  constructor() {
    super();
    this.state = {
      groups: [],
      redirect: false
    };
  }

  componentDidMount() {
    //connecting the socket to the server once the component has mounted
    const { socket } = this.props;
    console.log("this is the dashbord prop " + this.props);
    socket.on("connect", data => {
      console.log("Connected", data);
    });

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

  onClick = () => {
    console.log(this.props);
    const name = this.props.auth.user.name;
    this.setRedirect();
    // on clicking the group icon, we join a "room"
    const { socket } = this.props;
    socket.emit("join", name);
  };

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/chat"} />;
    }
    const { user } = this.props.auth;
    const name = user.name
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    return (
      <div>
        <Container style={{ marginBottom: "50px", marginTop: "50px" }}>
          <Image src={Profile} size="small" style={{ margin: "auto" }} />
          <Card
            style={{
              width: "50%",
              margin: "auto",
              borderRadius: "5px",
              boxShadow:
                "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
            }}
          >
            <Card.Content style={{ height: "500px" }}>
              <Card.Header
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "20px",
                  fontWeight: "400"
                }}
              >
                Welcome {name}.
                <br />
                Here are your upcoming events.
              </Card.Header>
              <br />
              <br />
              <Card.Content style={{ textAlign: "center" }}>
                EVENT LIST
              </Card.Content>
              <br />
              <br />
              {this.state.groups.map(group => {
                return <Header.Content>{group.name}</Header.Content>;
              })}
              <Card.Description
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button onClick={this.onClick}>Start chatting</Button>
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>
        <Footer style={{ bottom: "-120px" }} />
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
