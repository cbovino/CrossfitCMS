import React, {Component} from 'react';
import ScheduleStructure  from './ScheduleView';
import { connect } from 'react-redux';
import { fetchSchedule, fetchEnrollment } from '../../actions/scheduleActions';

class Schedule extends Component {

  componentDidMount(){
  this.props.fetchSchedule();
  this.props.fetchEnrollment(this.props.Auth.user.username);
  };


  render(){
      return(
        <div>
          <h1> Schedule Items </h1>
          <ScheduleStructure props ={this.props.Schedule} />
        </div>
    )
  }
};

const mapStateToProps = (state) => ({
  Auth: state.Auth,
  Schedule: state.Schedule
});


const mapDispatchToProps = dispatch => {
  return {
    fetchSchedule: () => dispatch(fetchSchedule()),
    fetchEnrollment: (username) => dispatch(fetchEnrollment(username))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
