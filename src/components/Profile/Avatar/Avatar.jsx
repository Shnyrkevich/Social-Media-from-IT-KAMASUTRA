import React from 'react';
import './avatar.css';

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
        <div className='app-main-avatar_about-me'>
          {props.aboutMe}
        </div>
        <div className='app-main-avatar_job-status'>
          {props.lookingForAJob ? `Looking for a job! ${props.lookingForAJobDescription}` : null}
        </div>
      </div>
    </div>
  );
}

export default Avatar;