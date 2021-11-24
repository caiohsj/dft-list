import { createStore } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import ErrorReducer from "./reducers/ErrorReducer";
import { combineReducers } from 'redux';

const reducers = combineReducers({
  auth: AuthReducer,
  error: ErrorReducer,
});

export default createStore(reducers);