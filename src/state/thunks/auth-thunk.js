import { actionCreator } from '../actions';
import { authApi } from '../../api/api';
import { stopSubmit } from 'redux-form';

export const authThunkCreator = () => (dispatch) => {
  authApi.authRequest()
  .then(response => {
    if (response.resultCode === 0) {
      let {login, id, email} = response.data;
      dispatch(actionCreator().setAuthentication(id, login, email, true));
    }
  })

  return 'compl';
}

export const signInThunkActionCreator = (email, password, rememberMe) => (dispatch) => {
  authApi.putLogin(email, password, rememberMe)
    .then(res => {
      if (res.resultCode === 0) {
        dispatch(authThunkCreator());
      } else {
        let message = res.messages.length ? res.messages[0] : 'Something wrong';
        dispatch(stopSubmit('login', { _error: message }));
      }
    })
}

export const logOutThunkActionCreator = () => (dispatch) => {
  authApi.logOut()
    .then(res => {
      if (res.resultCode === 0) {
        dispatch(actionCreator().setAuthentication(null, null, null, false));
      }
    })
}