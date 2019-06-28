// import React from "react";
// // import API from "../../utils/API";
// import EventsCard from "../EventsCard/index";
// import axios from "axios";

// class EventList extends React.Component {
//   state = {
//     events: []
//   };

//   componentDidMount() {
//     // this.loadEvents();
//     const {
//       match: { params }
//     } = this.props;

//     return axios
//       .get(
//         `https://app.ticketmaster.com/discovery/v2/events/?keyword=${
//           params.artistname
//         }&apikey=${process.env.REACT_APP_TICKETMASTER_API_KEY}`
//       )
//       .then(res => this.setState({ events: res.data._embedded.events }))
//       .catch(err => console.log(err));
//   }

//   renderEvents = () => {
//     console.log(this.state.events);
//     return this.state.events.map(event => {
//       return <EventsCard events={event} key={event.id} />;
//     });
//   };

//   render() {
//     return <div>{this.state.events.length !== 0 && this.renderEvents()}</div>;
//   }
// }

// export default EventList;
