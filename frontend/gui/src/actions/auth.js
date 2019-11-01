import axios from 'axios';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';


// Check the token and load USER

export const LoadUser = () => (dispatch, getState) => {
  dispatch({type: USER_LOADING });

  const token = getState().Auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  axios.get('http://127.0.0.1:8000/api/auth/User', config)
    .then(res => {
      setTimeout(() => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })}, 5000)
    }).catch(err => {
      console.log('this is the error')
      dispatch({
        type: AUTH_ERROR
      });
    })

}


export const LoginUser = (username, password) => dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request Body

  const body = JSON.stringify({username, password});

  axios.post('http://127.0.0.1:8000/api/auth/login', body, config)
    .then(res => {
      setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })}, 5000)
    }).catch(err => {
      console.log('this is the error')
      dispatch({
        type: LOGIN_FAIL
      });
    })

}



export const LogoutUser = () => (dispatch, getState) => {

  const token = getState().Auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  axios.post('http://127.0.0.1:8000/api/auth/logout/',null,  config)
    .then(res => {
      setTimeout(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })}, 5000)
    }).catch(err => {
      console.log('this is the error')
      console.log(err)
    })

}

export const RegisterUser = (body) => dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request Body


  axios.post('http://127.0.0.1:8000/api/auth/register', body, config)
    .then(res => {
      setTimeout(() => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })}, 5000)
    }).catch(err => {
      console.log('this is the error')
      dispatch({
        type: REGISTER_FAIL
      });
    })

}
