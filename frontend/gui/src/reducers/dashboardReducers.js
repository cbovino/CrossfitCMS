import  { FETCH_WORKOUTS, FETCH_RESULTS} from "../actions/types"

const initialState = {
  Workouts: [],
  Result: []
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_WORKOUTS:
      return{
        ...state,
        Workouts: action.items
      }
    case FETCH_RESULTS:
      return{
        ...state,
        Results: action.items
      }
    default:
      return{
        ...state
      }
    }
  }
