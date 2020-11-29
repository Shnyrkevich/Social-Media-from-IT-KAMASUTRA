import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsRedirect = (state) => ({ isAuth: state.authReducer.isAuth });

let RedirectHoc = (Comp) => {
  let Component = (props) => {
    if (!props.isAuth) return <Redirect to='/login'/>;
    return <Comp {...props} />;
  }

  return connect(mapStateToPropsRedirect)(Component);
}

export default RedirectHoc;