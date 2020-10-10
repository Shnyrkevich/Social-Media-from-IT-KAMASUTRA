import React from 'react';
import './posts.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

function Posts() {

  return (
    <div className='posts-container'>
        Posts
        <NewPost /> 
        <div className='posts'>
          <Post />
        </div>
    </div>
  );
}

export default Posts;