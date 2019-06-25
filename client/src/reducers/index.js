import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import group from "./groupReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  group: group
});
