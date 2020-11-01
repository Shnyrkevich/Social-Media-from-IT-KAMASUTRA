import React from 'react';
import preloader from '../../assets/images/preloader.svg';

export default function Preloader() {
  return <div className="preloader">
    <img src={preloader} alt="preloader image" className="preloader-image"/>
  </div>
}