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
        {this.state.eventDetails.length === 0 ? (
          <p>Loading Event Details...</p>
        ) : (
          <div>
            <a href={this.state.eventDetails[0].url}>Buy Tickets</a>
            <ArtistImage />

            <div className="event-details-card">
              <div className="thumbnail">
                <img
                  src={this.state.eventDetails[1].images[0].url}
                  className="artist-poster"
                />
              </div>
              <div className="event-details-content">
                <h1 className="artist-name">
                  {this.state.eventDetails[0].name}
                </h1>
                <div className="separator" />
                <p>{this.state.eventDetails[0]._embedded.venues[0].name}</p>
                <p>
                  {this.state.eventDetails[0]._embedded.venues[0].address.line1}
                </p>
                <p>{this.state.eventDetails[0].dates.start.dateTime}</p>
                <p>{this.state.eventDetails[0].images.url}</p>
              </div>
              <div className="date-and-icons">
                <h5>12</h5>
                <h6>JANUARY</h6>
                <ul>
                  <li>
                    <i class="fas fa-share-alt fa-3x" />
                  </li>
                  <li>
                    <i class="fas fa-share-alt fa-3x" />
                  </li>
                  <li>
                    <i class="fas fa-share-alt fa-3x" />
                  </li>
                  <li>
                    <i class="fas fa-share-alt fa-3x" />
                  </li>
                </ul>
              </div>
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
