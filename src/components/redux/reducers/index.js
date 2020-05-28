import {combineReducers} from 'redux';
import homeReducer from './homeReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers ({
  homeReducer,
  loginReducer,
});
export default rootReducer;