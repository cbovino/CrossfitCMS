import React from 'react'
import { connect } from 'react-redux';
import { fetchWorkouts, fetchResults } from '../../actions/dashboardActions';

class Dashboard extends React.Component {

  componentDidMount(){
    this.props.fetchWorkouts();
    this.props.fetchResults(this.props.Auth.user.username);
  };

  render () {
    return(
      <h1> Hi welcome to the Dashboard </h1>
    )
  }
}

const mapStateToProps = (state) => ({
  Workouts: state.Workouts,
  Results: state.Results,
  Auth: state.Auth
});


const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchResults: (username) => dispatch(fetchResults(username))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
