import { combineReducers } from 'redux';
import scheduleReducers from './scheduleReducers';
import  authReducers  from './authReducers';


export default combineReducers({
  Schedule: scheduleReducers,
  Auth: authReducers
})
