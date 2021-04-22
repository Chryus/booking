import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './userReducers';

const rootReducer = combineReducers({
  user: userLoginReducer,
  userRegister: userRegisterReducer
});

export default rootReducer;
