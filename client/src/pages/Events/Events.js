import React from "react";
// import API from "../../utils/API";
// import { Container, Header, Button } from "semantic-ui-react";
// import style from "./style.css";
import EventList from "../../components/EventList/index";
import EventListHeader from "../../components/EventListHeader/index";

class Events extends React.Component {
  // state = {
  //   events: []
  // };

  // componentDidMount() {
  //   this.loadEvents();
  // }

  // loadEvents = () => {
  //   API.getEvents()
  //     .then(res =>
  //       this.setState({
  //         events: res.data._embedded.events
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <EventListHeader />
        <EventList />
      </div>
    );
  }
}

export default Events;
