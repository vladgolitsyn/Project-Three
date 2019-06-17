import React from "react";
import API from "../utils/API";
import Map from "../components/mapCopy";

class EventDetails extends React.Component {
  state = {
    eventDetails: []
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
        {this.state.eventDetails.length === 0 ? (
          <p>Loading Event Details...</p>
        ) : (
          <div>
            <p>{this.state.eventDetails[0].name}</p>
            <p>{this.state.eventDetails[0].id}</p>
            <p>{this.state.eventDetails[0].url}</p>
            <p>{this.state.eventDetails[0].dates.start.dateTime}</p>
            <p>{this.state.eventDetails[0].images.url}</p>
          </div>
        )}

        <Map />
      </div>
    );
  }
}

export default EventDetails;
