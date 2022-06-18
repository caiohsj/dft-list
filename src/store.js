import { createStore } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import ErrorReducer from './reducers/ErrorReducer';
import ListItemReducer from './reducers/ListItemReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  auth: AuthReducer,
  error: ErrorReducer,
  listItem: ListItemReducer
});

export default createStore(reducers);