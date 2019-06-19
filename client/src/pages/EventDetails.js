import React from "react";
import API from "../utils/API";
// import Map from "../components/Map/map";
import ArtistImage from "../components/ArtistImage/index";
import SeatMap from "../components/SeatMap";

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
            <p>{this.state.eventDetails[0]._embedded.venues[0].name}</p>
            <p>
              {this.state.eventDetails[0]._embedded.venues[0].address.line1}
            </p>
            <p>{this.state.eventDetails[0].dates.start.dateTime}</p>
            <p>{this.state.eventDetails[0].images.url}</p>
            <a href={this.state.eventDetails[0].url}>Buy Tickets</a>
          </div>
        )}
        {/* 
        <Map /> */}
        <ArtistImage />

        <SeatMap />
      </div>
    );
  }
}

export default EventDetails;
