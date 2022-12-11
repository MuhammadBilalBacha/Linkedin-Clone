import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducerState } from "../Reducer/Reducer";
// import { rootReducer } from "../Reducer/RootReducer";

export const store = createStore(
  reducerState,
  composeWithDevTools(applyMiddleware(thunk))
);
