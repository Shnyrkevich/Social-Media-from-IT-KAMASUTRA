import { actionCreator } from '../actions';
import { profileApi } from '../../api/api';

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
  profileApi.getUserProfile(userId)
  .then(response => {
    dispatch(actionCreator().changeProfileFetchingStatus(true));
    dispatch(actionCreator().setActiveProfile(response));
    dispatch(actionCreator().changeProfileFetchingStatus(false));
  })
}

export const getUserStatus = (id) => (dispatch) => {
  profileApi.getUserStatus(id).
    then(response => {
      console.log(response)
      dispatch(actionCreator().setUserStatus(response));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
  profileApi.putUserStatus(status).
    then(response => {
      console.log(response);
      if (response.resultCode === 0) {
        dispatch(actionCreator().setUserStatus(status));
      }
    })
}