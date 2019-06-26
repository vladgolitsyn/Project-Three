import React from "react";
import "./style.css";
import moment from "moment";
import { createEventGroup, setGroupChat } from "../../actions/groupActions";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router";
class EventDetailsCard extends React.Component {
  onClick = event => {
    console.log("[DEBUG] setting group chat trying to join");
    if (this.props.auth.isAuthenticated === true) {
      this.props.createEventGroup({
        eventName: this.props.eventDetails.name,
        eventDate: moment(this.props.eventDetails.dates.start.dateTime).format(
          "dddd, MMMM Do YYYY"
        ),
        userId: this.props.auth.user.id
      });
    } else {
      setGroupChat({
        eventName: this.props.eventDetails.name,
        eventDate: moment(this.props.eventDetails.dates.start.dateTime).format(
          "dddd, MMMM Do YYYY"
        ),
        userId: this.props.auth.user.id
      });
      // this.props.history.push("/login");
    }
  };
  render() {
    console.log("DEBUG", this.props.eventDetails);
    return (
      <div>
        <div className="event-details-header">
          <h1>Event Details</h1>
          <a href="/events" className="event-return-btn">
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
                <div className="large-date-container">
                  <h5 className="large-date">
                    {" "}
                    {moment(
                      this.props.eventDetails.dates.start.dateTime
                    ).format("DD")}
                  </h5>
                </div>
                <div className="large-month-container">
                  <h6 className="large-month">
                    {" "}
                    {moment(
                      this.props.eventDetails.dates.start.dateTime
                    ).format("MMMM")}
                  </h6>
                </div>
                <ul className="selected-event-icons">
                  <li>
                    <i
                      className="fas fa-users fa-2x event-icons"
                      onClick={this.onClick}
                    />
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
)(EventDetailsCard);

// export default EventDetailsCard;
