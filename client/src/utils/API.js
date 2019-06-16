import axios from "axios";

const dotenv = require("dotenv").config();

export default {
  saveUsers: function(newUser) {
    return axios.post("api/users/register", newUser);
  },

  // retrieves a list of events using Ticketmaster Discovery API
  getEvents: function() {
    return axios.get(
      "https://app.ticketmaster.com/discovery/v2/events/?city=Boston&apikey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  getEventDetails: function() {
    return axios.get(
      "https://app.ticketmaster.com/discovery/v2/events/?id=Z7r9jZ1Ae_0Co&apikey=" +
        process.env.REACT_APP_API_KEY
    );
  }
};
