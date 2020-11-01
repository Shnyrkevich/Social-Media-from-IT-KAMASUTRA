import React from 'react';
import { useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import Users from './users';
import { connect } from 'react-redux';
import { 
  getUsersThunkCreator,
  getUsersWhenPageToggaledThunkCreator,
  toggleFollowUserStatus
} from '../../state/thunks/users-thunk';

function UsersLogicContainer(props) {

  useEffect(() => {
    if (!props.users.length) {
      props.setUsers(props.currentPage, props.pageSize);
    }
  }, [props.users]);

  function paginationClick(p) {
    props.setUsersWhenPageToggaled(p, props.pageSize);
  }

  return (
    <>
      { !props.isFetching ? <Users 
        toggleFollowStatus={props.toggleFollowStatus}
        paginationClick={paginationClick}
        users={props.users}
        pageSize={props.pageSize}
        totalUserCount={props.totalUserCount}
        currentPage={props.currentPage}
      /> : <Preloader /> }
    </>
  )
} 

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.usersPage.users,
    pageSize: state.usersReducer.usersPage.pageSize,
    totalUserCount: state.usersReducer.usersPage.totalUserCount,
    currentPage: state.usersReducer.usersPage.currentPage,
    isFetching: state.usersReducer.usersPage.isFetching
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollowStatus: (id, status, btn) => dispatch(toggleFollowUserStatus(id, status, btn)),
    setUsersWhenPageToggaled: (currentPage, pageSize) => dispatch(getUsersWhenPageToggaledThunkCreator(currentPage, pageSize)),
    setUsers: (currentPage, pageSize) => dispatch(getUsersThunkCreator(currentPage, pageSize))
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersLogicContainer);

export default UsersContainer;