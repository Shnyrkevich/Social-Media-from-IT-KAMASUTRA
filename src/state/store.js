import dialogsReducer from "./reducers/dialogs-reducer";
import postsReducer from './reducers/posts-reducer';

let store = {
  _state: {
    posts: [
      {
        id: 1,
        text: 'Hi',
      },
      {
        id: 2,
        text: 'What is the weather today?',
      },
      {
        id: 3,
        text: 'Lol',
      },
    ],
    messages: [
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
    ]
  },
  getState() {
    return this._state;
  },
  setState(data) {
    this._state = data;
  },
  subscribe(observer) {
    this.siteRender = observer;
  },
  siteRender() {
    console.log('Something changed');
  },
  dispatch(action) {
    this._state.messages = dialogsReducer(this._state.messages, action);
    this._state.posts = postsReducer(this._state.posts, action);
    this.siteRender(this._state);
  }
}

export const createNewMessage = (message) => {
  return {
    type: types.SEND_NEW_MESSAGE,
    message: message,
  };
};

export const addPostActionCreator = (text) => {
  return {
    type: types.ADD_NEW_POST,
    data: text,
  };
};

export const types = {
  ADD_NEW_POST: 'ADD_NEW_POST',
  SEND_NEW_MESSAGE: 'SEND_NEW_MESSAGE',
}

export default store;
