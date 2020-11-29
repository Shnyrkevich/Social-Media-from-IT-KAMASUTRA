import{ applyMiddleware, combineReducers, createStore } from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import appReducer from './reducers/app-reducer';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';


let reducers = combineReducers({
  form: formReducer,
  appReducer,
  dialogsReducer,
  profileReducer,
  usersReducer,
  authReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;