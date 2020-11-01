import React from 'react';
import DialogsContainer from '../Dialogs/DialogsContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Navigation from '../Navigation/Navigation';
import ProfileContainer from '../Profile/ProfileContainer';
import './App.css';
import { Route } from 'react-router-dom';
import UsersContainer from '../Users/UsersContainer';

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navigation />
      <div className='content'>
        <Route render={() => <ProfileContainer />} path='/profile/:userId?'/>
        <Route exact render={() => <DialogsContainer />} path='/dialogs'/>
        <Route exact render={() => <UsersContainer />} path='/users'/>
      </div>
    </div>
  );
}

export default App;
