import React, { Component } from "react";

const seatmapStyles = {
  display: "block",
  margin: "0 auto"
};

export default class ArtistImage extends Component {
  render() {
    return (
      <div>
        {this.props.eventDetails.length === 0 ? (
          <div />
        ) : (
          <div>
            <img
              src={this.props.eventDetails.seatmap.staticUrl}
              style={seatmapStyles}
            />
          </div>
        )}
      </div>
    );
  }
}
