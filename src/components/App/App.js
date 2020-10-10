import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/MainContent';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
