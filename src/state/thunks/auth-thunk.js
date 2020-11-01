import { actionCreator } from '../actions';
import { authRequest } from '../../api/api';

export const authThunkCreator = () => (dispatch) => {
  authRequest()
  .then(response => {
    if (response.resultCode === 0) {
      let {login, id, email} = response.data;
      dispatch(actionCreator().setAuthentication(id, login, email));
    }
  })
}