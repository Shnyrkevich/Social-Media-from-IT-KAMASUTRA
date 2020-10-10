import React from 'react';
import Avatar from './Avatar/Avatar';
import './profile.css';
import Posts from './Posts/Posts';

function Profile() {

  return (
    <div className='app-main'>
      <div className='app-main-header-img'>
        <img src='https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg' />
      </div>
      <Avatar />
      <Posts />
    </div>
  );
}

export default Profile;