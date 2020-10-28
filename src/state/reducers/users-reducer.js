import { types } from '../actions';

const initialState = {
  users : [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_USERS: {
      return {
        ...state,
        users: [
          //...state.users,
          ...action.data
        ]
      };
    }
    case types.FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((el) => {
          if(el.id === action.data) {
            return {
              ...el,
              followed: true,
            }
          }
          return el;
        }),
      };
    }
    case types.UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((el) => {
          if(el.id === action.data) {
            return {
              ...el,
              followed: false,
            }
          }
          return el;
        }),
      };
    }
    case types.CHANGE_USERS_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.data,
      };
    }
    case types.SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUserCount: action.data,
      }
    }
    default: {
      return state;
    } 
  }
};

export default usersReducer;