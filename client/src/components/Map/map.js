import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import API from "../../utils/API";

const mapStyles = {
  width: "350px",
  height: "350px"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
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
    return (
      <div>
        {this.state.eventDetails.length === 0 ? (
          <p>Loading Event Details...</p>
        ) : (
          <div>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: Object.assign(
                  this.state.eventDetails._embedded.venues[0].location.latitude
                ),
                lng: Object.assign(
                  this.state.eventDetails._embedded.venues[0].location.longitude
                )
              }}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={this.state.eventDetails._embedded.venues[0].name}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h5>{this.state.selectedPlace.name}</h5>
                  <p>
                    {this.state.eventDetails._embedded.venues[0].address.line1}
                  </p>
                  <p>Event: {this.state.eventDetails.name}</p>
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
