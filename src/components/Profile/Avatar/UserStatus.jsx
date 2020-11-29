import React, { useEffect, useState } from 'react';

function UserStatus({ status, updateUserStatus }) {
  let [editMode, setEditMode] = useState(false);
  let [statusValue, setStatusValue] = useState( status ? status : '' );

  useEffect(() => {
    if (statusValue !== status) {
      setStatusValue(status);
    }
  }, [status])

  function activeEditMode() {
    setEditMode(true);
  }

  function disactiveEditMode() {
    setEditMode(false);
    if (statusValue !== status) {
      updateUserStatus(statusValue);
    }
  }

  function statusOnChange(ev) {
    setStatusValue(ev.target.value);
  }

  return (
    <div className='app-main-avatar_status'>
      {
        editMode ?
         <input onChange={statusOnChange} autoFocus={true} onBlur={() => disactiveEditMode()} value={statusValue}/> :
         <span onDoubleClick={() => activeEditMode()}>{ statusValue }</span>
      }
    </div>
  );
}

export default UserStatus;