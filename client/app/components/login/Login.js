import React, { Component, PropTypes } from 'react'

import classnames from 'classnames'
import loginStyle from './login.scss';
import commonStyle from '../common/common.scss';
import 'bootstrap/dist/css/bootstrap.css';

export default class Login extends Component {

  renderErrors() {
    const { errors } = this.props;

    const errorStyles = classnames(commonStyle.error);

    return errors.map((error, i) => {
      return (
          <p key={i} className={errorStyles}>{error}</p>
      );
    });
  }

  render() {
    const formControlStyles = classnames(commonStyle.formControl);
    const buttonStyles = classnames(commonStyle.btn);

    const loginStyles = classnames(loginStyle.login);

    return (
        <div className="pull-right">
          <div className="navbar-form navbar-left">
           <div className="form-group">
            <input type='text' ref='username' className="form-control" placeholder='Username'/>
           </div> 
            &nbsp;
           <div className="form-group">
            <input type='password' ref='password' className="form-control" placeholder='Password'/>
           </div> 	
            &nbsp; 
            &nbsp; 
            <button onClick={() => this.handleLogin()} className="btn btn-primary">
              Login
            </button>
          </div>
          <span>{this.renderErrors()}</span>
          
        </div>
    )
  }

  handleLogin() {
    const { onLoginClick } = this.props;

    const credentials = {
      username: this.refs.username.value.trim(),
      password: this.refs.password.value.trim()
    };

    onLoginClick(credentials)
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string)
};