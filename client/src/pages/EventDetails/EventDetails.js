import React from "react";
import API from "../../utils/API";
import Map from "../../components/Map/map";
import SeatMap from "../../components/SeatMap/index";
import EventDetailsCard from "../../components/EventDetailsCard/index";

class EventDetails extends React.Component {
  state = {
    eventDetails: [],
    shouldShowMap: false,
    shouldShowSeatMap: false
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

  toggleMap = () => {
    this.setState({ shouldShowMap: !this.state.shouldShowMap });
  };

  toggleSeatMap = () => {
    this.setState({ shouldShowSeatMap: !this.state.shouldShowSeatMap });
  };

  render() {
    return (
      <div>
        <EventDetailsCard
          eventDetails={this.state.eventDetails}
          toggleMap={this.toggleMap}
          toggleSeatMap={this.toggleSeatMap}
        />
        {this.state.shouldShowMap && (
          <Map eventDetails={this.state.eventDetails} />
        )}

        {this.state.shouldShowSeatMap && (
          <SeatMap eventDetails={this.state.eventDetails} />
        )}
      </div>
    );
  }
}

export default EventDetails;
