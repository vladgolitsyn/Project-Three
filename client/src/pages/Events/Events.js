import React from "react";
import EventList from "../../components/EventList/index";
import EventListHeader from "../../components/EventListHeader/index";

class Events extends React.Component {
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
