import React, { Component } from "react";

const seatmapStyles = {
  display: "block",
  margin: "10px auto 100px auto"
};

export default class Seatmap extends Component {
  render() {
    console.log("RENDERING SEAT MAP", this.props);
    return (
      <div>
        {this.props.eventDetails && (
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
