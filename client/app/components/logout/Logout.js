import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import commonStyle from '../common/common.scss';
import 'bootstrap/dist/css/bootstrap.css';

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props;

    const buttonStyles = classnames(commonStyle.btn);

    return (
    		  <div className="pull-right">
              <div className="navbar-form navbar-left">
               <div className="form-group">		
        <button onClick={() => onLogoutClick()} className="btn btn-danger pull-right">
          Logout
        </button>
          </div>
          </div>
          </div>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};