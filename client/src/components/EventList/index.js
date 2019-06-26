import React from "react";
import API from "../../utils/API";
import EventsCard from "../EventsCard/index";

class EventList extends React.Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEventDetails()
      .then(res =>
        this.setState({
          events: res.data._embedded.events
        })
      )
      .catch(err => console.log(err));
  };

  renderEvents = () => {
    console.log(this.state.events);
    return this.state.events.map(event => {
      return <EventsCard events={event} key={event.id} />;
    });
  };

  render() {
    return <div>{this.state.events.length !== 0 && this.renderEvents()}</div>;
  }
}

export default EventList;
