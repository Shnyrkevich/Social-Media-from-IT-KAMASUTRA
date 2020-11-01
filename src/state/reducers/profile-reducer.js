import { types } from '../actions';

const initialState = {
  profilePage: {
    profile: null,
    isFetching: false,
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
  }
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_NEW_POST: {
      return { 
        ...state,
        profilePage: {
          ...state.profilePage,
          userPosts: [ 
            ...state.profilePage.userPosts,
            {
              id: state.profilePage.userPosts.length + 1,
              text: action.data
            }
          ],
        }
      };
    }
    case types.CHANGE_PROFILE_FETCHING: {
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          isFetching: action.data,
        }
      }
    }
    case types.SET_ACTIVE_PROFILE: {
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          profile: action.data,
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;