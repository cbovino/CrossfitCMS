import  { FETCH_SCHEDULE, ENROLL, FULL, FETCH_ENROLLMENT, DELETE} from "../actions/types"

const initialState = {
  Schedule: [],
  Enrollment: [],
  items: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_SCHEDULE:
      return{
        ...state,
        Schedule: action.items
      }
    case FETCH_ENROLLMENT:
      return{
        ...state,
        Enrollment: action.items
      }
    case ENROLL:
      return{
        ...state,
        Enrollment: [...state.Enrollment, action.items ]
      }
    case FULL:
    case DELETE:
      return{
        ...state
      }

    default:
      return{
        ...state
      }
}
}
