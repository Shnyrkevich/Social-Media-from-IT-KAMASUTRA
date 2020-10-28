import { types } from '../actions';

const initialState = {
  userPosts: [
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
};

const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_NEW_POST: {
      return { 
        ...state,
        userPosts: [ 
          ...state.userPosts,
          {
            id: state.userPosts.length + 1,
            text: action.data
          }
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer