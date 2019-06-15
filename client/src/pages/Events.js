import React from "react";
import API from "../utils/API";

class Events extends React.Component {
  state = {
    events: [{ name: "" }]
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
  render() {
    return (
      <div>
        <h1>Events</h1>
        <p>{this.state.events[0].name}</p>
        <p>{this.state.events[0].url}</p>
        {/* <p>{this.state.events[0].dates}</p>
        <p>{this.state.events[0].images}</p> */}
      </div>
    );
  }
}

export default Events;
