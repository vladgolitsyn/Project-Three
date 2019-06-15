import React from "react";
import API from "../utils/API";

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

  render() {
    return (
      <div>
        <h1>Events</h1>
        {this.state.events.length === 0 ? (
          <p>Loading Events...</p>
        ) : (
          <div>
            {this.state.events.map(function(event) {
              return (
                <div>
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
    );
  }
}

export default Events;
