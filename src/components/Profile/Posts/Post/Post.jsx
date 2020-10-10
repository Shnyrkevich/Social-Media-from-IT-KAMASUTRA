import React from 'react';
import './post.css';

function Post() {

  return (
    <div className='post'>
      <div className='post-user_avatar'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa00t8qJLkU9UjcSg49mNlHFWphZ5_3kl8-A&usqp=CAU' />
      </div>
      <div className='post-text'>
        Text
      </div>
    </div>
  );
}

export default Post;