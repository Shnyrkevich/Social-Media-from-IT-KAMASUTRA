import React from 'react';
import * as axios from 'axios';
import { useEffect } from 'react';
import preloader from '../../assets/images/preloader.svg';
import Users from './users';
import { actionCreator } from '../../state/actions';
import { connect } from 'react-redux';

function UsersLogicContainer(props) {
  function subscribeToUser(id, status) {
    props.subscribeAction(id, status);
  }

  useEffect(() => {
    if (!props.users.length) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
      .then(response => {
        props.setUsers(response.data.items);
        props.setTotalUsersCount(response.data.totalCount > 21 ? 21 : response.data.totalCount);
      })
    }
  }, [props.users]);

  function paginationClick(p) {
    props.changeCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`)
    .then(response => {
      props.setUsers(response.data.items);
    })
  }

  return (
    <>
      { props.users.length ? <Users 
        subscribeToUser={subscribeToUser}
        paginationClick={paginationClick}
        users={props.users}
        pageSize={props.pageSize}
        totalUserCount={props.totalUserCount}
        currentPage={props.currentPage}
      /> : <img src={preloader} className='preloader'/> }
    </>
  )
} 

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUserCount: state.usersReducer.totalUserCount,
    currentPage: state.usersReducer.currentPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    subscribeAction: (id, status) => {
      if (status) {
        dispatch(actionCreator().unfollowUser(id));
      } else {
        dispatch(actionCreator().followUser(id));
      }
    },
    setUsers: (users) => dispatch(actionCreator().setUsers(users)),
    changeCurrentPage: (pageNumber) => dispatch(actionCreator().changeCurrentUsersPage(pageNumber)),
    setTotalUsersCount: (usersQuantity) => dispatch(actionCreator().setUsersTotalCount(usersQuantity)),
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersLogicContainer);

export default UsersContainer;