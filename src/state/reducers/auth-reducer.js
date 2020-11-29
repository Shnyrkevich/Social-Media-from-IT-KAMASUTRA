import { types } from '../actions';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_AUTHENTICATION: {
      return {
        ...state,
        ...action.data,
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;