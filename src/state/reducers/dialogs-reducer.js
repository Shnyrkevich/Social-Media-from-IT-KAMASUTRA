import { types } from '../actions';

const initialState = {
  dialogsPage: {
    conversationsUsers: [
      {
        id: 1,
        user: 'Anton',
      },
      {
        id: 2,
        user: 'Grisha',
      },
      {
        id: 3,
        user: 'Valer',
      },
      {
        id: 4,
        user: 'Halera',
      },
    ],
    dialogsMessages: [
      {
        id: 1,
        message: 'Hi',
      },
      {
        id: 2,
        message: 'Hi Anton, how are you?',
      },
      {
        id: 3,
        message: 'Thanks, im fine what about you?',
      },
    ],
  }
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SEND_NEW_MESSAGE: {
      return {
        dialogsPage : {
          ...state.dialogsPage,
          dialogsMessages: [ 
            ...state.dialogsPage.dialogsMessages,
            {
              id: state.dialogsPage.dialogsMessages.length + 1,
              message: action.message
            }
          ],
        }
      };
    }
    default: {
      return state;
    } 
  }
};

export default dialogsReducer;