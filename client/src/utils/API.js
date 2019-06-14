import axios from "axios";

export default {
  saveUser: function(userSaveChoice) {
    return axios.post("/api/users", userSaveChoice);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  }
};
