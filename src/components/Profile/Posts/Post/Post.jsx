import React from 'react';
import './post.css';

function Post({ post }) {

  return (
    <div className='post'>
      <div className='post-information'>
        <div className='post-user_avatar'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa00t8qJLkU9UjcSg49mNlHFWphZ5_3kl8-A&usqp=CAU' alt='user-avatar'/>
        </div>
        <div className='post-text'>
          { post }
        </div>
      </div>
      <span className='post-like' role='img'>🖤</span>
    </div>
  );
}

export default Post;