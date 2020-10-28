import{ combineReducers, createStore } from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import postsReducer from './reducers/posts-reducer';
import usersReducer from './reducers/users-reducer';


let reducers = combineReducers({
  dialogsReducer,
  postsReducer,
  usersReducer
})

let store = createStore(reducers);

export default store;