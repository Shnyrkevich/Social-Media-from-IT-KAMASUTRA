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