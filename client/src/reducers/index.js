import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './userReducers';

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer
});

export default rootReducer;
