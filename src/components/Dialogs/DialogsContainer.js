import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { actionCreator } from '../../state/actions';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsReducer.dialogsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: (text) => dispatch(actionCreator().createNewMessage(text)),
  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;