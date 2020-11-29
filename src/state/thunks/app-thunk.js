import { actionCreator } from '../actions';
import { authThunkCreator } from './auth-thunk';

export const initializeApp = () => (dispatch) => {
  let auth = dispatch(authThunkCreator());
  Promise.all([auth]).then(() => {
    dispatch(actionCreator().setInitiolized());
  })
};