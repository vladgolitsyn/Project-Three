import React from "react";
import API from "../../utils/API";
import "./style.css";
import moment from "moment";

class EventCard extends React.Component {
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
            <div className="list--event-card">
              <div className="list--thumbnail">
                <img
                  src={this.state.eventDetails[0].images[4].url}
                  className="list--artist-poster"
                />
              </div>
              <div className="list--event-card-title">
                <h1 className="list--event-name">
                  {this.state.eventDetails[0].name}
                  {" - "}
                  {this.state.eventDetails[0]._embedded.venues[0].city.name}
                  {", "}
                  {
                    this.state.eventDetails[0]._embedded.venues[0].country
                      .countryCode
                  }
                </h1>
              </div>
              <ul className="list--event-details">
                <li>{this.state.eventDetails[0]._embedded.venues[0].name}</li>

                <li>
                  {this.state.eventDetails[0]._embedded.venues[0].address.line1}
                  {", "}
                  {this.state.eventDetails[0]._embedded.venues[0].city.name}
                </li>

                <li>
                  Event Start:{" "}
                  {moment(
                    this.state.eventDetails[0].dates.start.localTime,
                    "HH:mm"
                  ).format("h:mm A")}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EventCard;
