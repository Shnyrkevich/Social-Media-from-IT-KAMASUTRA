import './dialogs.css';
import React, { useRef } from 'react';
import UserDialog from './UserDialog/UserDialog';
import Dialog from './Dialog/Dialog';

function Dialogs({ dialogsPage, sendNewMessage}) {
  let textAreaRef = useRef();

  function sendNewMessageButton () {
    if ( textAreaRef.current.value ) {
      sendNewMessage(textAreaRef.current.value);
      textAreaRef.current.value='';
    }
  }

  return (
    <div className='dialogs'>
      <p className='dialogs-header'> Dialogs </p>
      <div className='dialogs-container'>
        <div className='dialogs-container-users'>
          {
            dialogsPage.conversationsUsers.map((el) => <UserDialog key={el.id} name={el.user} />)
          }
        </div>
        <div className='dialogs-container-dialogs'>
          {
            dialogsPage.dialogsMessages.map((el) => <Dialog key={el.id} text={el.message} />)
          }
          <div className='posts-new_post'>
            <textarea
              ref={textAreaRef}
              className='new_message-text'
              placeholder='Start Conversation'
            > 
            </textarea>
            <div className='btn-container'>
              <button
                onClick={ sendNewMessageButton }
                className='new-post-btn add_new_post-btn'
              >
                Add Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;