import React from 'react'
import { connect } from 'react-redux'
import { LoginUser } from '../../actions/auth';
import {Redirect} from "react-router-dom";
import  { Opener }  from '.././common/homeView';



class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Username: '',
      Password: ''
    }
  this.onChange = this.onChange.bind(this);
  this.submitLogin = this.submitLogin.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  submitLogin(event){
    event.preventDefault();
    this.props.LoginUser(this.state.Username, this.state.Password)
  }

  render () {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return(
      <div>
        <Opener />
        <h1> Sign Into your Box here</h1>
        <form onSubmit = {this.submitLogin}>
          <p> UserName </p>
          <input type='text' name = 'Username' onChange = {this.onChange}></input>
            <br/>
          <p> PassWord </p>
          <input type='text' name = 'Password' onChange = {this.onChange}></input>
          <button type = "submit" onSubmit = {this.submitLogin}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStatetoProps, { LoginUser })(Login);
