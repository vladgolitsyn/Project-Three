import React from "react";
import API from "../../utils/API";
// import Map from "../components/Map/map";
import ArtistImage from "../ArtistImage/index";
// import SeatMap from "../SeatMap/index";
import "./style.css";

class EventDetailsCard extends React.Component {
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
            <h2>{this.state.eventDetails[0].name}</h2>
            <p>{this.state.eventDetails[0]._embedded.venues[0].name}</p>
            <p>
              {this.state.eventDetails[0]._embedded.venues[0].address.line1}
            </p>
            <p>{this.state.eventDetails[0].dates.start.dateTime}</p>
            <p>{this.state.eventDetails[0].images.url}</p>
            <a href={this.state.eventDetails[0].url}>Buy Tickets</a>
            <ArtistImage />

            <div className="event-details-card">
              <img
                src="https://assets.teenvogue.com/photos/5ad9032b73a9c74b3611437c/16:9/w_1280%2Cc_limit/ariana-grande-high-ponytail-to-low-new-album.jpg"
                className="artist-poster"
              />
            </div>
          </div>
        )}
        {/* 
        <Map /> */}

        {/* <SeatMap /> */}
      </div>
    );
  }
}

export default EventDetailsCard;
