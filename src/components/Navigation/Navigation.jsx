import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {

  return (
    <nav className='app-navigation'>
      <div className='navigation-link-container'>
        <NavLink className='navigation-link' to='/profile'>
          Profile
        </NavLink>
      </div>
      <div className='navigation-link-container'>
        <NavLink className='navigation-link' to='/dialogs'>
          Messages
        </NavLink>
      </div>
      <div className='navigation-link-container'>
        <NavLink className='navigation-link' to='/users'>
          Users
        </NavLink>
      </div>
      <div className='navigation-link-container'>
        <NavLink className='navigation-link' to='/news'>
          News
        </NavLink> 
      </div>
      <div className='navigation-link-container'>
        <NavLink className='navigation-link' to='/music'>
          Music
        </NavLink>
      </div>
      <div className='navigation-link-container'>
        <NavLink className='navigation-link' to='/settings'>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;