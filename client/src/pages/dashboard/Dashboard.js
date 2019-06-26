import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";
import { Redirect } from "react-router-dom";
import { Button, Card, Container, Image } from "semantic-ui-react";
import Footer from "../../components/Footer";
import Profile from "../../images/profile.png";

class Dashboard extends Component {
  socket = null;

  state = {
    redirect: false
  };

  componentDidMount() {
    //connecting the socket to the server once the component has mounted
    const { socket } = this.props;
    console.log("this is the dashbord prop " + this.props);
    socket.on("connect", data => {
      console.log("Connected", data);
    });
  }

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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
