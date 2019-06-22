import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "600px",
  height: "500px",
  display: "block",
  margin: "0 auto"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    eventDetails: []
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log("DEBUG G MAP", this.props.eventDetails);
    return (
      <div>
        {this.props.eventDetails.length === 0 ? (
          <div />
        ) : (
          <div>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: Object.assign(
                  this.props.eventDetails._embedded.venues[0].location.latitude
                ),
                lng: Object.assign(
                  this.props.eventDetails._embedded.venues[0].location.longitude
                )
              }}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={this.props.eventDetails._embedded.venues[0].name}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h5>{this.state.selectedPlace.name}</h5>
                  <p>
                    {this.props.eventDetails._embedded.venues[0].address.line1}
                  </p>
                  <p>Event: {this.props.eventDetails.name}</p>
                </div>
              </InfoWindow>
            </Map>
          </div>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(MapContainer);
