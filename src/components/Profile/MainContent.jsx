import React from 'react';

function Profile() {

  return (
    <div className='app-main'>
      <div className='app-main-header-img'>
        <img src='https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg' />
      </div>
      <div className='app-main-avatar'>
        Ava+description
      </div>
      <div className='posts-container'>
        Posts
        <div className='posts-new_post'>
          newPost
        </div>
        <div className='posts'>
          <div className='post'>
            Post1
          </div>
          <div className='post'>
            Post2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;