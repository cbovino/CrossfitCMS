import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { LogoutUser } from "../.././actions/auth";
import {Navbar} from 'react-bootstrap';


/* This is the navigation bar. It will render authlinks if the user is authenticated
otherwise will render guest links. It also gets the name of the user for the authlinks nav
 */

class Bar extends React.Component {
  render () {

    const { isAuthenticated } = this.props.auth;


    const authLinks = (
        <Navbar>
            <Navbar.Brand>
              <Link to="/">
                <span>Schedule</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/dashboard">
                <span>Dashboard</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: {isAuthenticated ? this.props.auth.user['username'] : 'null'}
              </Navbar.Text>
              <Navbar.Brand>
                <button onClick={this.props.LogoutUser} >Logout</button>
              </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
    );

    const guestLinks = (
      <Navbar>
          <Navbar.Brand>
            <Link to="/Login">
              <span>Login</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/Register">
              <span>Register</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
      </Navbar>
    );

    return (
      <div>
      { isAuthenticated ? authLinks : guestLinks}
      </div>
    )
  }
}


const mapStatetoProps = state => ({
  auth: state.Auth
})

export default connect (mapStatetoProps, {LogoutUser})(Bar);
