import React from "react";
// import EventList from "../../components/EventList/index";
import axios from "axios";
import EventDetails from "../../components/EventDetailsCard/index";
import { Link } from "react-router-dom";
import API from "../../utils/API";
// import { Container, Header, Button } from "semantic-ui-react";
import { createEventGroup, setGroupChat } from "../../actions/groupActions";
// import style from "./style.css";
import { connect } from "react-redux";
// import EventList from "../../components/EventList/index";
import EventListHeader from "../../components/EventListHeader/index";
import EventsCard from "../../components/EventsCard/index";

class Events extends React.Component {
  state = {
    events: [],
    clickedEvent: false,
    eventClicked: false
  };

  componentDidMount() {
    console.log(this.props)
    // this.loadEvents();
    const {
      match: { params }
    } = this.props;

    return axios
      .get(
        "https://cors-anywhere.herokuapp.com/" +
          `https://app.ticketmaster.com/discovery/v2/events/?keyword=${
            params.artistname
          }&apikey=${process.env.REACT_APP_TICKETMASTER_API_KEY}`
      )
      .then(res => {
        console.log(res.data._embedded.events);
        this.setState({ events: res.data._embedded.events })
      })
      .catch(err => console.log(err));
  }

  eventID = (e, clickedEvent) => {
    this.setState({ clickedEvent: clickedEvent, eventClicked: true });
  };

  renderEvents = () => {
    return this.state.events.map(clickEvent => {
      return (
        <EventsCard
          events={clickEvent}
          key={clickEvent.id}
          onClick={e => this.eventID(e, clickEvent)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {this.state.eventClicked && (
          <EventDetails eventDetails={this.state.clickedEvent} />
        )}
        {!this.state.eventClicked && (
          <div>
            <EventListHeader />
            <div>{this.state.events.length !== 0 && this.renderEvents()}</div>
          </div>
        )}
        )
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
