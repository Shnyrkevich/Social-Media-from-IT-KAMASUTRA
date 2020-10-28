import React from 'react';
import './user.css';

function User({ user, subscribeAction }) {
  function followButton() {
    subscribeAction(user.id, user.followStatus);
  }

  return (
    <div className='users_user'>
      <div className='user_container'>
        <div className='user-status'>
          <div className='user-status_icon'>
            <img src={user.photos.small ? user.photos.small : 'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png'} />
          </div>
          <button onClick={followButton}  className='user-status_btn'>{ user.followed ? 'follow' : 'unfollow' }</button>
        </div>
        <div className='user-information'>
          <div className="user-information_container">
            <div className='user-information_name'>{user.name}</div>
            <div className='user-information_town'>{`${user.city}/${user.country}`}</div>
          </div>
          <div className='user-information_profile-status'>{user.status}</div>
        </div>
      </div>
    </div>
  )
} 

export default User;