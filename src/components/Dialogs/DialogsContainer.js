import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { actionCreator } from '../../state/actions';
import RedirectHoc from '../RedirectHoc/RedirectHoc';
import { compose } from 'redux';

function DialogsContainer(props) {
  return props.dialogsPage ? <Dialogs {...props} /> : null;
} 

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsReducer.dialogsPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: (text) => dispatch(actionCreator().createNewMessage(text)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  RedirectHoc
)(DialogsContainer);