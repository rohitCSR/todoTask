import { combineReducers } from 'redux';
import TableReducer from './TableReducer';
import UserReducer from './UserReducer';
export default combineReducers({
  table: TableReducer,
  user: UserReducer, //Log representing the states related to logs
});
