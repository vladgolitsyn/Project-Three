import axios from "axios";

export default {
  saveUsers: function(newUser) {
    return axios.post("api/users/register", newUser);
  }
};
