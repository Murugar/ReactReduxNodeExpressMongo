import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'
import style from './users.scss';
import 'bootstrap/dist/css/bootstrap.css';

class Users extends Component {

  render() {
    const { isAuthenticated, authenticate } = this.props;
    
    console.log(JSON.stringify(authenticate) + ' Shit ');
    console.log(isAuthenticated + ' Shit1 ');
  
    const usersStyles = classnames(style.users);
    
    const shit3 = authenticate["user"]["name"];
    
    const shit4 = authenticate["user"]["role"];
    
    const shit5 = authenticate["user"]["token"];
  
    
    console.log(JSON.stringify(authenticate["user"]["name"]) + ' Shit2 ');

    return (
    		<div className="container">
    	    <div className="panel panel-primary">
            <div className="panel-heading">Users</div>
            <div className="panel-body">	
        <div className="text-success">
        
        
            {!isAuthenticated
                          && 
            		<div>Please login first!</div>
            }

            {isAuthenticated &&
              
            	  <div className="panel panel-primary">
            <div className="panel-heading">Greetings</div>
            <div className="panel-body">		
              <div className="text-danger">
                   Hello User : {shit3}  
                   <div className="text-warning"> Role : {shit4} </div>
                   <div className="row">
                   <div className="col-md-6">
                   <h4 className="text-danger word-wrap"> Token : {shit5.substring(0, 20)} </h4>
                   </div>
                   
                   </div>
              </div>
              </div>
              </div>
            }
                    
        </div>
        </div>
        </div>
        </div>
    )
  }
}

Users.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {

  const { authenticate } = state;
  const { isAuthenticated } = authenticate;

  return {
    isAuthenticated, authenticate
  }
}

export default connect(mapStateToProps)(Users)