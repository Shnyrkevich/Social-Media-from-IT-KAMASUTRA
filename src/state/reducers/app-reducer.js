import { types } from '../actions';

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_INITIOLIZED: {
      return {
        ...state,
        initialized: true,
      }
    }
    default: {
      return state;
    }
  }
};

export default appReducer;