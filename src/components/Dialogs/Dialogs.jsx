import './dialogs.css';
import React from 'react';
import UserDialog from './UserDialog/UserDialog';
import Dialog from './Dialog/Dialog';
import { Field, reduxForm } from 'redux-form';
import { SomeTextarea } from '../form-controller/form-controller';
import { maxLengthValidate, required, minLengthValidate } from '../../utils/validators/validators';

const maxLengthValidate1000 = maxLengthValidate(1000);
const minLengthValidate3 = minLengthValidate(3);

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="dialogs-container-dialogs-form">
      <div className='posts-new_post'>
        <Field
          name='messageTextarea'
          component={SomeTextarea('textarea')}
          className='new_message-text'
          placeholder='Start Conversation'
          validate={[ maxLengthValidate1000, minLengthValidate3, required ]}
        /> 
        <div className='btn-container'>
          <button
            type='submit'
            className='new-post-btn add_new_post-btn'
          >
            Add Message
          </button>
        </div>
      </div>
    </form>
  );
}

const NewMessageFormWithRedux = reduxForm({ form: 'new_message_form' })(NewMessageForm);

function Dialogs({ dialogsPage, sendNewMessage}) {
  function sendNewMessageButton(formData) {
    if ( formData.messageTextarea ) {
      sendNewMessage(formData.messageTextarea);
      console.log(formData);
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
          <NewMessageFormWithRedux onSubmit={sendNewMessageButton}/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;