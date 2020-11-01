import React from 'react';
import { NavLink } from 'react-router-dom';
import './user-dialog.css';

function UserDialog({ name }) {

  return (
    <div className='user-dialog'>
      <NavLink className='user-dialog_name' to={`/dialogs/${name}`}>
        { name }
      </NavLink>
    </div>
  );
}

export default UserDialog;