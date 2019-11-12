import  { FETCH_WORKOUTS, FETCH_RESULTS } from "./types";
import axios from 'axios';

export function fetchWorkouts(){
  return function (dispatch) {
    axios.get('http://127.0.0.1:8000/api/Workout/')
    .then(res => {
      dispatch({
        type: FETCH_WORKOUTS,
        items: res.data
      })
    })
  }
}


export function fetchResults(username){
  return function (dispatch) {
    var x = [];
    axios.get('http://127.0.0.1:8000/api/Result/').then(
      res => {
      res.data.forEach(function (arrayitem){
        if (arrayitem.username === username){
          x.push(arrayitem)
        }})
      dispatch({
        type: FETCH_RESULTS,
        items: x
      })
    }
    )
  }
}
