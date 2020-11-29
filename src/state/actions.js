export const types = {
  SET_INITIOLIZED: 'SET_INITIOLIZED',
  ADD_NEW_POST: 'ADD_NEW_POST',
  SEND_NEW_MESSAGE: 'SEND_NEW_MESSAGE',
  SET_USERS: 'SET_USERS',
  FOLLOW_USER: 'FOLLOW_USER',
  UNFOLLOW_USER: 'UNFOLLOW_USER',
  CHANGE_USERS_CURRENT_PAGE: 'CHANGE_USERS_CURRENT_PAGE',
  SET_USERS_TOTAL_COUNT: 'SET_USERS_TOTAL_COUNT',
  CHANGE_USERS_FETCHING: 'CHANGE_USERS_FETCHING',
  SET_ACTIVE_PROFILE: 'SET_ACTIVE_PROFILE',
  CHANGE_PROFILE_FETCHING: 'CHANGE_PROFILE_FETCHING',
  SET_AUTHENTICATION: 'SET_AUTHENTICATION',
  SET_USER_STATUS: 'SET_USER_STATUS',
}



export const actionCreator = () => {
  return {
    setUsersTotalCount: (usersQuantity) => ({ type: types.SET_USERS_TOTAL_COUNT, data: usersQuantity }),
    setUsers: (users) => ({ type: types.SET_USERS, data: users }),
    followUser: (userId) => ({ type: types.FOLLOW_USER, data: userId }),
    unfollowUser: (userId) => ({ type: types.UNFOLLOW_USER, data: userId }),
    changeCurrentUsersPage: (pageNumber) => ({ type: types.CHANGE_USERS_CURRENT_PAGE, data: pageNumber }),
    changeUsersFetchingStatus: (status) => ({ type: types.CHANGE_USERS_FETCHING, data: status }),
    setActiveProfile: (profileId) => ({ type: types.SET_ACTIVE_PROFILE, data: profileId }),
    createNewMessage: (message) => ({ type: types.SEND_NEW_MESSAGE, data: message }),
    createNewPost: (post) => ({ type: types.ADD_NEW_POST, data: post }),
    changeProfileFetchingStatus: (status) => ({ type: types.CHANGE_PROFILE_FETCHING, data: status }),
    setAuthentication: (id, login, email, isAuth) => ({ type: types.SET_AUTHENTICATION, data: {id, login, email, isAuth} }),
    setUserStatus: (status) => ({ type: types.SET_USER_STATUS, data: status }),
    setInitiolized: () => ({type: types.SET_INITIOLIZED}),
  }
};