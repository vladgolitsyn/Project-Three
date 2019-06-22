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

  // componentDidMount() {
  //   this.loadEventDetails();
  // }

  // loadEventDetails = () => {
  //   API.getEventDetails()
  //     .then(res =>
  //       this.setState({
  //         eventDetails: res.data._embedded.events
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    console.log("DEBUG", this.props.eventDetails);
    return (
      <div>
        <div className="event-details-header">
          <h1>Events Details</h1>
          <a className="event-return-btn">
            <i className="fas fa-undo-alt event-return-btn-icon" />
            Go Back
          </a>
        </div>
        {this.props.eventDetails.length === 0 ? (
          <div />
        ) : (
          <div>
            <div className="event-details-card">
              <div className="thumbnail">
                <img
                  src={this.props.eventDetails.images[1].url}
                  className="artist-poster"
                />
              </div>
              <div className="event-details-content">
                <h1 className="artist-name">{this.props.eventDetails.name}</h1>
                <div className="separator" />
                <p>{this.props.eventDetails._embedded.venues[0].name}</p>
                <p>
                  {this.props.eventDetails._embedded.venues[0].address.line1}
                  {", "}
                  {this.props.eventDetails._embedded.venues[0].city.name}
                </p>
                <p>
                  {" "}
                  {moment(this.props.eventDetails.dates.start.dateTime).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </p>
                <p>
                  Event Start:{" "}
                  {moment(
                    this.props.eventDetails.dates.start.localTime,
                    "HH:mm"
                  ).format("h:mm A")}
                </p>
                <p>{this.props.eventDetails.images.url}</p>
              </div>
              <div className="date-and-icons">
                <h5 className="large-date">
                  {" "}
                  {moment(this.props.eventDetails.dates.start.dateTime).format(
                    "DD"
                  )}
                </h5>
                <h6 className="large-month">
                  {" "}
                  {moment(this.props.eventDetails.dates.start.dateTime).format(
                    "MMMM"
                  )}
                </h6>
                <ul className="selected-event-icons">
                  <li>
                    <i className="fas fa-users fa-2x event-icons" />
                  </li>
                  <li onClick={this.props.toggleSeatMap}>
                    <i className="fas fa-map-marker-alt fa-2x event-icons" />
                  </li>
                  <li onClick={this.props.toggleMap}>
                    <i className="fas fa-road fa-2x event-icons" />
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
