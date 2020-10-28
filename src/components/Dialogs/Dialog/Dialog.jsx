import React from 'react';
import './dialog.css';

function Dialog({ text }) {

  return (
    <div className='dialog'>
      <div className='dialog-text'>
        {text}
      </div>
    </div>
  );
}

export default Dialog;