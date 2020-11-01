import { types } from '../actions';

const initialState = {
  usersPage: {
    users : [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
  }
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_USERS: {
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          users: [
            ...action.data
          ]
        }
      };
    }
    case types.FOLLOW_USER: {
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          users: state.usersPage.users.map((el) => {
            if(el.id === action.data) {
              return {
                ...el,
                followed: true,
              }
            }
            return el;
          }),
        },
      };
    }
    case types.UNFOLLOW_USER: {
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          users: state.usersPage.users.map((el) => {
            if(el.id === action.data) {
              return {
                ...el,
                followed: false,
              }
            }
            return el;
          })
        },
      };
    }
    case types.CHANGE_USERS_CURRENT_PAGE: {
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          currentPage: action.data,
        }
      };
    }
    case types.SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          totalUserCount: action.data,
        }
      }
    }
    case types.CHANGE_USERS_FETCHING: {
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          isFetching: action.data,
        }
      }
    }
    default: {
      return state;
    } 
  }
};

export default usersReducer;