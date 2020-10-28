import Posts from './Posts';
import React from 'react';
import { addPostActionCreator } from '../../../state/store';
import { connect } from 'react-redux';

let mapStateToProps = (state) => { return { posts: state.postsReducer.userPosts }};
let mapDispatchToProps = (dispatch) => { return { addNewPost: (text) => dispatch(addPostActionCreator(text))}};

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;