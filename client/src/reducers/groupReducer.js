import {
  SET_EVENT_CHAT_TRYING_TO_JOIN,
  CREATE_EVENT_GROUP_SUCCESS
} from "../actions/types";

const initialState = {
  eventChatTryingToJoin: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case SET_EVENT_CHAT_TRYING_TO_JOIN:
    case CREATE_EVENT_GROUP_SUCCESS:
      return {
        ...state,
        eventChatTryingToJoin: action.payload
      };
    default:
      return state;
  }
}
