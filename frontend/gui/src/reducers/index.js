import { combineReducers } from 'redux';
import scheduleReducers from './scheduleReducers';
import  authReducers  from './authReducers';
import dashboardReducers from './dashboardReducers';


export default combineReducers({
  Schedule: scheduleReducers,
  Dashboard: dashboardReducers,
  Auth: authReducers
})
