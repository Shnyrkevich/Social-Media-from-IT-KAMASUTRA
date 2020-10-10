import React from 'react';
import './navigation.css';

function Navigation() {

  return (
    <nav className='app-navigation'>
      <div className='navigation-link-container'>
        <a className='navigation-link'>
          Profile
        </a>
      </div>
      <div className='navigation-link-container'>
        <a className='navigation-link'>
          Messages
        </a>
      </div>
      <div className='navigation-link-container'>
        <a className='navigation-link'>
          News
        </a> 
      </div>
      <div className='navigation-link-container'>
        <a className='navigation-link'>
          Music
        </a>
      </div>
      <div className='navigation-link-container'>
        <a className='navigation-link'>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default Navigation;