import React from "react";
import API from "../utils/API";

class EventDetails extends React.Component {
  state = {
    eventDetails: [{ name: "" }]
  };

  componentDidMount() {
    this.loadEventDetails();
  }

  loadEventDetails = () => {
    API.getEventDetails()
      .then(res =>
        this.setState({
          eventDetails: res.data._embedded.events
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Event Details</h1>
        <p>{this.state.eventDetails[0].name}</p>
        <p>{this.state.eventDetails[0].url}</p>
        {/* <p>{this.state.events[0].dates}</p>
        <p>{this.state.events[0].images}</p> */}
      </div>
    );
  }
}

export default EventDetails;
