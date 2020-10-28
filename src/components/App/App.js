import React from 'react';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/MainContent';
import './App.css';
import { Route } from 'react-router-dom';
import UsersContainer from '../Users/UsersContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className='content'>
        <Route exact render={() => <Profile />} path='/profile'/>
        <Route exact render={() => <DialogsContainer />} path='/dialogs'/>
        <Route exact render={() => <UsersContainer />} path='/users'/>
      </div>
    </div>
  );
}

export default App;
