import { combineReducers } from 'redux';
import users from './users';
import hotels from './hotels';

export default combineReducers({
  users,
  hotels,
});
