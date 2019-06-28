import React from "react";
import moment from "moment";
// import { Link } from "react-router-dom";
import "./style.css";

export default class EventsCard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div onClick={this.props.onClick}>
        <div className="list--event-card">
          <div className="list--thumbnail">
            <img
              src={this.props.events.images[4].url}
              className="list--artist-poster"
              alt="event"
            />
          </div>
          <div className="list--event-card-title">
            <h1 className="list--event-name">
              {this.props.events.name}
              {" - "}
              {this.props.events._embedded.venues[0].city.name}
              {", "}
              {this.props.events._embedded.venues[0].country.countryCode}
            </h1>
          </div>
          <ul className="list--event-details">
            <li>{this.props.events._embedded.venues[0].name}</li>

            <li>
              {this.props.events._embedded.venues[0].address.line1}
              {", "}
              {this.props.events._embedded.venues[0].city.name}
            </li>

            <li>
              {" "}
              {moment(this.props.events.dates.start.dateTime).format(
                "ddd, MMM Do YYYY"
              )}
            </li>

            <li>
              Event Start:{" "}
              {moment(this.props.events.dates.start.localTime, "HH:mm").format(
                "h:mm A"
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
