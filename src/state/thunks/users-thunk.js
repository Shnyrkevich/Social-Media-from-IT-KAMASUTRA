import { actionCreator } from '../actions';
import { usersApi } from '../../api/api';

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(actionCreator().changeUsersFetchingStatus(true));
  usersApi.getUsers(currentPage, pageSize)
  .then(response => {
    dispatch(actionCreator().setUsers(response.items));
    dispatch(actionCreator().setUsersTotalCount(response.totalCount > 101 ? 101 : response.totalCount));
    dispatch(actionCreator().changeUsersFetchingStatus(false));
  })
}

export const getUsersWhenPageToggaledThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(actionCreator().changeCurrentUsersPage(currentPage));
  dispatch(actionCreator().changeUsersFetchingStatus(true));
  usersApi.getUsers(currentPage, pageSize)
  .then(response => {
    dispatch(actionCreator().setUsers(response.items));
    dispatch(actionCreator().changeUsersFetchingStatus(false));
  })
}

export const toggleFollowUserStatus = (id, status, btn) => (dispatch) => {
  btn.disabled = true; 
  if (status) {
    usersApi.deleteUnfollowUser(id)
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(actionCreator().unfollowUser(id));
      }
      btn.disabled = false;
    })
  } else {
    usersApi.postFollowUser(id)
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(actionCreator().followUser(id));
      }
      btn.disabled = false;
    })
  }
};