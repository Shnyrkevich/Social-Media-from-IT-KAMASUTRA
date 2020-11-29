import React from 'react';
import './avatar.css';
import UserStatus from './UserStatus';

function Avatar(props) {
  return (
    <div className='app-main-avatar'>
      <div className='avatar-image'>
        <img src={props.photos.small ? props.photos.small : 'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png'} />
      </div>
      <div className='app-main-information-container'>
        <div className='app-main-avatar_full-name'>
          {props.fullName}
        </div>
        <UserStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        <div className="app-main-information_about-me">
          { props.aboutMe ? props.aboutMe : null }
        </div>
        <div className='app-main-avatar_job-status'>
          {props.lookingForAJob ? `Looking for a job! ${props.lookingForAJobDescription}` : null}
        </div>
      </div>
    </div>
  );
}

export default Avatar;