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
      return{
        ...state,
        Enrollment: [...state.Enrollment]
      }
    case DELETE:
      return{
        ...state,
        Enrollment: state.Enrollment.filter((item) => item.schedule_id !== action.items)
      }

    default:
      return{
        ...state
      }
}
}
