import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

/* eslint-disable */
const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route
    {...rest}
    render={
      (props) => {
        if (rest.isAuthenticated) {
          return (
            <Component {...props} />
          );
        }
        return (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location },
            }}
          />
        );
      }
      
    }
  />
);
/* eslint-enable */
function mapStateToProps(state) {
  return {
    isAuthenticated: state.users.isAuthenticated,
  };
}
export default withRouter(connect(mapStateToProps)(PrivateRoute));
