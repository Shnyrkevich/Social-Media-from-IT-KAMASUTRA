import React from 'react';
import './posts.css';
import Post from './Post/Post';
import { useRef } from 'react';

function Posts(props) {
  let textAreaRef = useRef();

  function addNewPostButtonListener() {
    if ( textAreaRef.current.value ) {
      props.addNewPost(textAreaRef.current.value);
      textAreaRef.current.value = '';
    }
  }
  
  let postsArray = props.posts.map((el) => <Post post={el.text} key={el.id}/>);

  return (
    <div className='posts-container'>
        Posts
        <div className='posts-new_post'>
          <textarea
            ref={textAreaRef}
            className='new_post-text'
            placeholder='Input Something'
          /> 
          <div className='btn-container'>
            <button
              onClick={ addNewPostButtonListener }
              className='new-post-btn add_new_post-btn'
            >
              Add Post
            </button>
          </div>
        </div>
        <div className='posts'>
          { postsArray }
        </div>
    </div>
  );
}

export default Posts;