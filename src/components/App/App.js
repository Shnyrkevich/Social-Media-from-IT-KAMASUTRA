import React, { useState } from 'react';
import DialogsContainer from '../Dialogs/DialogsContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Navigation from '../Navigation/Navigation';
import ProfileContainer from '../Profile/ProfileContainer';
import Login from '../Login/Login';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from '../Users/UsersContainer';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from '../../state/thunks/app-thunk';
import Preloader from '../Preloader/Preloader';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const initialized = useSelector(state => state.appReducer.initialized);

  useEffect(() => {
    console.log('INFO', initialized);
    dispatch(initializeApp());
  })

  return initialized ? (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navigation />
      <div className='content'>
        <Route render={() => <ProfileContainer />} path='/profile/:userId?'/>
        <Route exact render={() => <DialogsContainer />} path='/dialogs'/>
        <Route exact render={() => <UsersContainer />} path='/users'/>
        <Route render={() => <Login />} path='/login' />
      </div>
    </div>
  ) : <Preloader />;
}

export default withRouter(App);
