import React from "react";
import API from "../utils/API";

class EventDetails extends React.Component {
  state = {
    eventDetails: []
  };

  componentDidMount() {
    this.loadEventDetails();
  }

  loadEventDetails = () => {
    API.getEventDetails()
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err));
    console.log(res.data);
  };
}

export default EventDetails;
