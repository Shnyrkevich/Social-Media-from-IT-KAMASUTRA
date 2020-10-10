import React from 'react';
import './new-post.css';

function NewPost() {

  return (
    <div className='posts-new_post'>
      <textarea className='new_post-text'></textarea>
      <div className='btn-container'>
        <button className='new-post-btn add_new_post-btn'>Add Post</button>
        <button className='new-post-btn add_new_post-btn'>Close Post</button>
      </div>
    </div>
  );
}

export default NewPost;