import React from "react";
import API from "../../utils/API";
// import Map from "../components/Map/map";
// import ArtistImage from "../ArtistImage/index";
// import SeatMap from "../SeatMap/index";
import "./style.css";
import moment from "moment";

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
            {/* <a href={this.state.eventDetails[0].url}>Buy Tickets</a> */}
            <div className="event-details-header">
              <h1>Event Details</h1>
              <a className="event-return-btn">
                <i className="fas fa-undo-alt event-return-btn-icon" />
                Go Back
              </a>
            </div>
            <div className="event-details-card">
              <div className="thumbnail">
                <img
                  src={this.state.eventDetails[0].images[1].url}
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
                <p>
                  {" "}
                  {moment(
                    this.state.eventDetails[0].dates.start.dateTime
                  ).format("dddd, MMMM Do YYYY")}
                </p>
                <p>
                  Event Starts:{" "}
                  {moment(
                    this.state.eventDetails[0].dates.start.localTime,
                    "HH:mm"
                  ).format("h:mm A")}
                </p>
                <p>{this.state.eventDetails[0].images.url}</p>
              </div>
              <div className="date-and-icons">
                <h5 className="large-date">
                  {" "}
                  {moment(
                    this.state.eventDetails[0].dates.start.dateTime
                  ).format("DD")}
                </h5>
                <h6>
                  {" "}
                  {moment(
                    this.state.eventDetails[0].dates.start.dateTime
                  ).format("MMMM")}
                </h6>
                <ul>
                  <li>
                    <i className="fas fa-users fa-2x event-icons" />
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x event-icons" />
                  </li>
                  <li>
                    <i className="fas fa-map-signs fa-2x event-icons" />
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
