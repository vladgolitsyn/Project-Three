import axios from "axios";

export default {
  saveUsers: function(newUser) {
    return axios.post("api/users/register", newUser);
  },

  postLoginUser: function(user) {
    return axios.post("api/users/login", user);
  },

  getLogoutUser: function() {
    return axios.get("api/users/logout");
  }
};
