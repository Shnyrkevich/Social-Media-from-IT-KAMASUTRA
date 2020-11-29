import React from 'react';
import Avatar from './Avatar/Avatar';
import './profile.css';
import Posts from './Posts/Posts';

function Profile(props) {
  return props.profile ? <div className='app-main'>
      <Avatar {...props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <Posts 
        posts={props.posts}
        addNewPost={props.addNewPost}
      />
    </div> : null
}

export default Profile;