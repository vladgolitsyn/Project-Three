import React, { Component } from "react";
import API from "../../utils/API";

export default class SeatMap extends Component {
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
          eventDetails: res.data._embedded.events[0]
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
            <img src={this.state.eventDetails.seatmap.staticUrl} />
          </div>
        )}
      </div>
    );
  }
}
