import { combineReducers } from "redux";
import { reducerState } from "./Reducer";

export const rootReducer = combineReducers({
  userState: reducerState,
});
