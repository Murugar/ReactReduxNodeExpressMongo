import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//import classnames from 'classnames'
//import style from './home.scss';

import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {

  render() {
    const { isAuthenticated, authenticate } = this.props;
    
    
    
    // const shit4 = authenticate.user.name;
    
     
     console.log(JSON.stringify(authenticate) + ' Home Shit2 ');

   // const navBarHomeStyles = classnames(style.home);

    return (
        
    	<div className="container">	
        <div className="panel panel-primary">
        <div className="panel-heading">Home</div>
        <div className="panel-body">
          {!isAuthenticated &&
          <div className="text-info">Welcome to our user management platform</div>
          }

          {isAuthenticated &&
          <div className="text-info">Welcome to our user management platform :: Authenticated</div>
          }
        </div>  
        </div>  
        </div> 
    )
  }
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {

  const { authenticate } = state;
  const { isAuthenticated } = authenticate;

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Home)