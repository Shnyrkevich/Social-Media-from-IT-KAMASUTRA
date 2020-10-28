export const types = {
  ADD_NEW_POST: 'ADD_NEW_POST',
  SEND_NEW_MESSAGE: 'SEND_NEW_MESSAGE',
  SET_USERS: 'SET_USERS',
  FOLLOW_USER: 'FOLLOW_USER',
  UNFOLLOW_USER: 'UNFOLLOW_USER',
  CHANGE_USERS_CURRENT_PAGE: 'CHANGE_USERS_CURRENT_PAGE',
  SET_USERS_TOTAL_COUNT: 'SET_USERS_TOTAL_COUNT',
}



export const actionCreator = () => {
  return {
    setUsersTotalCount: (usersQuantity) => ({ type: types.SET_USERS_TOTAL_COUNT, data: usersQuantity }),
    setUsers: (users) => ({ type: types.SET_USERS, data: users }),
    followUser: (userId) => ({ type: types.FOLLOW_USER, data: userId }),
    unfollowUser: (userId) => ({ type: types.UNFOLLOW_USER, data: userId }),
    changeCurrentUsersPage: (pageNumber) => ({ type: types.CHANGE_USERS_CURRENT_PAGE, data: pageNumber }),
  }
};