import  { FETCH_SCHEDULE, ENROLL, FULL, FETCH_ENROLLMENT, DELETE } from "./types";
import axios from 'axios';


export function fetchSchedule(){
  return function (dispatch) {
    axios.get('http://127.0.0.1:8000/api/Schedule/')
    .then(res => {
      dispatch({
        type: FETCH_SCHEDULE,
        items: res.data
      })
    })
  }
}


export function fetchEnrollment(username){
  return function (dispatch) {
  var x = [];
  axios.get('http://127.0.0.1:8000/api/Enrollment/').then(
    res => {
    res.data.forEach(function (arrayitem){
      if (arrayitem.username === username){
        x.push(arrayitem)
      }})
    dispatch({
      type: FETCH_ENROLLMENT,
      items: x
    })
  }
  )
}
}

export const Enroll = (id, username) => dispatch => {
  const enrollment = {
    "username" : username,
    "schedule_id": id
  }
  axios.all([
      axios.get('http://127.0.0.1:8000/api/Enrollment/'),
      axios.get('http://127.0.0.1:8000/api/Schedule/'+ id + '/')
    ])
    .then(axios.spread((enrollRes, availabilityRes) => {
      var x = []
      enrollRes.data.forEach(function (arrayitem){
        if (arrayitem.schedule_id === id){
          x.push(arrayitem);
        }
      }
    )

    if (x.length <availabilityRes.data.availability){
      axios.put('http://127.0.0.1:8000/api/Enrollment/', enrollment).then(res =>
      {
        dispatch({
          type: ENROLL,
          items: res.data
        })
      })
    }else {
      dispatch({
        type: FULL,
        items: id
      })
    }
    }))
  }


  export const Unenroll = (id, username) => dispatch => {

    axios.get('http://127.0.0.1:8000/api/Enrollment/').then(
      res => {
        var pk = 0
        res.data.forEach(function (arrayitem){
          if (arrayitem.schedule_id === id && arrayitem.username === username){
             pk += arrayitem.id
          }
        }
      )

      axios.delete('http://127.0.0.1:8000/api/Enrollment/' + pk + '/').then(
        res => {
          dispatch({
            type: DELETE,
            items: id
          })
        }
      )

        })
    }
