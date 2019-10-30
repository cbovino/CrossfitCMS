import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, Auth, ...rest }) => {
  return (
    <Route
    {...rest}
    render = {props => {
      if(Auth.isLoading) {
        return <h2>Loading...</h2>
      } else if(!Auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
    />
  )
}

const mapStatetoProps = state => ({
  Auth: state.Auth
})

export default connect(mapStatetoProps)(PrivateRoute);
