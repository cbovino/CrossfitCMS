import React from 'react'
import { connect } from 'react-redux'
import { RegisterUser } from '../../actions/auth';
import {Redirect} from "react-router-dom";
import  { Opener }  from '.././common/homeView';




class Register extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
    this.onChange = this.onChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  submitRegister(event){
    event.preventDefault();
    const { username, email, password, password2} = this.state;
    if (password !== password2){
       console.log("Password dont match")
    } else {

      const newUser = {
        username,
        email,
        password
      }
      this.props.RegisterUser(newUser);
    }
  }

  render () {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Opener />
        <h1>Register below</h1>
        <form onSubmit = {this.submitRegister}>
          <p> Username </p>
          <input type='text' name = 'username' onChange = {this.onChange} value={this.state.username}></input>
          <br/>
          <p> Email </p>
          <input type='text' name = 'email' onChange = {this.onChange} value={this.state.email}></input>
          <br/>
          <p> Password </p>
          <input type='text' name = 'password' onChange = {this.onChange} value={this.state.password}></input>
          <br/>
          <p> Confirm Password </p>
          <input type='text' name = 'password2' onChange = {this.onChange} value={this.state.password2}></input>
          <button type = "submit" onSubmit = {this.submitRegister}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStatetoProps, { RegisterUser})(Register);
