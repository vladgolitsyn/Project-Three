import axios from "axios";
import API from "../utils/API";
import {
  SET_EVENT_CHAT_TRYING_TO_JOIN,
  CREATE_EVENT_GROUP_PENDING,
  CREATE_EVENT_GROUP_SUCCESS,
  CREATE_EVENT_GROUP_FAILURE
} from "./types";

export const setGroupChat = (event, history) => dispatch => {
  console.log("[DEBUG] inside setGroupChat action");
  dispatch({
    type: SET_EVENT_CHAT_TRYING_TO_JOIN,
    payload: event
  });
};
// FRONTEND LOGIC
// ==============
//   create a group
//     if 200 or 409 => add user to group
//     else => display error

export const createEventGroup = event => dispatch => {
  console.log("[DEBUG] inside setGroupChat action");
  dispatch({ type: CREATE_EVENT_GROUP_PENDING });
  axios
    .post("/api/groups", event)
    .then(res => {
      console.log("EVENTS ", event);
      console.log("[DEBUG] setGroupChat SUCCESS");
      dispatch({ type: CREATE_EVENT_GROUP_SUCCESS, payload: event });
    })
    .catch(err => {
      if (err.response.status === 409 && err.response.status === 200) {
        API.updateGroup(event.userId);
        // dispatch({ type: CREATE_EVENT_GROUP_SUCCESS, payload: event });
      } else {
        console.log(err);
      }

      console.log("[DEBUG] setGroupChat SUCCESS");
      dispatch({
        type: CREATE_EVENT_GROUP_FAILURE,
        payload: "Unable to create an event group"
      });
      console.error(err);
    });
};
