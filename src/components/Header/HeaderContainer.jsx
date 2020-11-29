import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logOutThunkActionCreator } from '../../state/thunks/auth-thunk';

function HeaderContainer(props) {
  return <Header {...props} />
}

let mapStateToProps = (state) => {
  return {
    login: state.authReducer.login,
    email: state.authReducer.email,
    isAuth: state.authReducer.isAuth,
  }
}

export default connect(mapStateToProps, {logOutThunkActionCreator})(HeaderContainer);