import { combineReducers } from "redux";
import { loopreducerConstant } from "../_constants";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";


let reducers = {
  authentication,
  registration,
  users,
  alert,

};

function capitalize(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const rootReducer = combineReducers(reducers);

export default rootReducer;
