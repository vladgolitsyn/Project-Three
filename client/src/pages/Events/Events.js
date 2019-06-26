import React from "react";
import API from "../../utils/API";
import { Container, Header, Button } from "semantic-ui-react";
import { createEventGroup, setGroupChat } from "../../actions/groupActions";
import style from "./style.css";
import { connect } from "react-redux";
import EventList from "../../components/EventList/index";
import EventListHeader from "../../components/EventListHeader/index";

class Events extends React.Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({
          events: res.data._embedded.events
        })
      )
      .catch(err => console.log(err));
  };

  // onClick = event => {
  //   console.log("[DEBUG] setting group chat trying to join");
  //   if (this.props.auth.isAuthenticated === true) {
  //     this.props.createEventGroup({
  //       eventName: this.state.events[1].name,
  //       eventDate: this.state.events[1].dates.start.dateTime,
  //       userId: this.props.auth.user.id
  //     });
  //   } else {
  //     setGroupChat({
  //       eventName: this.state.events[1].name,
  //       eventDate: this.state.events[1].dates.start.dateTime,
  //       userId: this.props.auth.user.id
  //     });
  //     this.props.history.push("/login");
  //   }
  // };

  render() {
    return (
      <div>
        {/* <Button onClick={this.onClick}>Choose A Event</Button> */}
        <EventListHeader />
        <EventList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createEventGroup, setGroupChat }
)(Events);
