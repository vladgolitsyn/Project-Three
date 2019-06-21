import React from "react";
import API from "../../utils/API";
import { Container, Header, Button } from "semantic-ui-react";
import style from "./style.css";
import EventCard from "../../components/EventsCard/index";

class Events extends React.Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({
          events: res.data._embedded.events
        })
      )
      .catch(err => console.log(err));
  };

  // For testing purpose
  onClick = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <Container>
        <div>
          <Header>
            This button is just for testing
            <Button className="eventGroup" onClick={this.onClick}>
              User will click her to create a group
            </Button>
          </Header>
          <h1>Events</h1>
          {this.state.events.length === 0 ? (
            <p>Loading Events...</p>
          ) : (
            <div>
              {this.state.events.map(function(event) {
                return (
                  <div>
                    <EventCard />

                    <li>{event.name}</li>
                    <li>{event.id}</li>
                    <li>{event.url}</li>
                    <li>{event.dates.start.dateTime}</li>
                    <br />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    );
  }
}

export default Events;
