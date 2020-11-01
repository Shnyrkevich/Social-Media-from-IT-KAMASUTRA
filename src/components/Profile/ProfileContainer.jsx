import React from 'react';
import Profile from './MainContent';
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';
import { actionCreator } from '../../state/actions';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getUserProfileThunkCreator } from '../../state/thunks/profile-thunk';

function ProfileContainer(props) {
  useEffect(() => {
    let userId = props.match.params.userId ? props.match.params.userId : 2;
    props.setActiveProfile(userId);
  }, [props.match.params.userId])

  return props.isFetching ? <Preloader /> : <Profile
    profile={props.profile}
    addNewPost={props.addNewPost}
    posts={props.posts}
  />;
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.profileReducer.profilePage.isFetching,
    profile: state.profileReducer.profilePage.profile,
    posts: state.profileReducer.profilePage.userPosts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (text) => dispatch(actionCreator().createNewPost(text)),
    setActiveProfile: (userId) => dispatch(getUserProfileThunkCreator(userId)),
  };
};

let ProfileContinerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContinerWithUrlData);