import React, { Component } from "react";
import API from "../../utils/API";

export default class ArtistImage extends Component {
  // componentDidMount() {
  //   this.loadEventDetails();
  // }

  // loadEventDetails = () => {
  //   API.getEventDetails()
  //     .then(res =>
  //       this.setState({
  //         eventDetails: res.data._embedded.events[0]
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        {this.props.eventDetails.length === 0 ? (
          <p>Loading Event Details...</p>
        ) : (
          <div>
            <img src={this.props.eventDetails.seatmap.staticUrl} />
          </div>
        )}
      </div>
    );
  }
}
