import axios from "axios";

const dotenv = require("dotenv").config({
  path: "/client"
});
console.log(process.env.REACT_APP_API_KEY);

export default {
  saveUsers: function(newUser) {
    return axios.post("api/users/register", newUser);
  },

  // retrieves a list of events using Ticketmaster Discovery API
  getEvents: function() {
    return axios.get(
      "https://app.ticketmaster.com/discovery/v2/events/?city=Boston&apikey=yQ6UD1UTEIV25l6lWH4I2tyEOFK9EDM9"
    );
  },

  getEventDetails: function() {
    return axios.get(
      "https://app.ticketmaster.com/discovery/v2/events/?id=Z7r9jZ1Ae_0Co&apikey=yQ6UD1UTEIV25l6lWH4I2tyEOFK9EDM9"
    );
  }
};
