import React, { useEffect } from 'react';
import Profile from './MainContent';
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';
import { actionCreator } from '../../state/actions';
import { withRouter } from 'react-router-dom';
import { getUserProfileThunkCreator, getUserStatus, updateUserStatus } from '../../state/thunks/profile-thunk';
import RedirectHoc from '../RedirectHoc/RedirectHoc';
import { compose } from 'redux';

function ProfileContainer(props) {
  useEffect(() => {
    let userId = props.match.params.userId ? props.match.params.userId : props.userId;
    props.setActiveProfile(userId);
    props.setActiveUserStatus(userId);
    
  }, [props.match.params.userId])

  return props.isFetching ? <Preloader /> : <Profile
    profile={props.profile}
    addNewPost={props.addNewPost}
    posts={props.posts}
    status={props.status}
    updateUserStatus={props.updateActiveUserStatus}
  />;
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.profileReducer.profilePage.isFetching,
    profile: state.profileReducer.profilePage.profile,
    posts: state.profileReducer.profilePage.userPosts,
    status: state.profileReducer.profilePage.status,
    userId: state.authReducer.id,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (text) => dispatch(actionCreator().createNewPost(text)),
    setActiveProfile: (userId) => dispatch(getUserProfileThunkCreator(userId)),
    setActiveUserStatus: (userId) => dispatch(getUserStatus(userId)),
    updateActiveUserStatus: (status) => dispatch(updateUserStatus(status)),
  };
};



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  RedirectHoc,
  withRouter
)(ProfileContainer);