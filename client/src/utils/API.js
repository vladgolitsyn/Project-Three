import axios from "axios";

export default {
  // retrieves a list of events using Ticketmaster Discovery API
  getEvents: function() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios.get(
      proxyurl +
        "https://app.ticketmaster.com/discovery/v2/events/?keyword=shania+twain&apikey=" +
        process.env.REACT_APP_TICKETMASTER_API_KEY
    );
  },

  getEventDetails: function() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios.get(
      proxyurl +
        `https://app.ticketmaster.com/discovery/v2/events/?keyword=ariana+grande&apikey=
        ${process.env.REACT_APP_TICKETMASTER_API_KEY}`
    );
  }
};
