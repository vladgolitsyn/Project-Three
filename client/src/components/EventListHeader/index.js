import React from "react";
import "./style.css";

function EventListHeader() {
  return (
    <div>
      <div className="event-header">
        <h1>Event Details</h1>
        <a className="event-return-btn">
          <i className="fas fa-undo-alt event-return-btn-icon" />
          Go Back
        </a>
      </div>
    </div>
  );
}

export default EventListHeader;
