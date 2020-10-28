import Dialogs from './Dialogs';
import { createNewMessage } from '../../state/store';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  console.log(state)
  return {
    dialogsPage: state.dialogsReducer.dialogsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  console.log(dispatch(createNewMessage('lol')));
  return {
    sendNewMessage: (text) => dispatch(createNewMessage(text)),
  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;