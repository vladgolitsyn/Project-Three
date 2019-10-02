import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function EventListHeader() {
  return (
    <div>
      <div className="event-header">
        <h1>Events</h1>
        <Link to="/" className="event-return-btn">
          <i className="fas fa-undo-alt event-return-btn-icon" />
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default EventListHeader;
