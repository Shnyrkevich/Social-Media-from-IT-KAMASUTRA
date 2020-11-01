import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authThunkCreator } from '../../state/thunks/auth-thunk';

function HeaderContainer(props) {
  useEffect(() => {
    props.setAuthentication();
  })

  return <Header {...props} />
}

let mapStateToProps = (state) => {
  return {
    login: state.authReducer.login,
    email: state.authReducer.email,
  }
}

let mapDispatchToProps = (dispatch) => ({ setAuthentication: () => dispatch(authThunkCreator()) });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);