import { combineReducers } from 'redux';
import loginAndSignin from './loginAndSignin';
import notes from './notes';

const reducers = combineReducers({
  loginAndSignin,
  notes
});

export default reducers;
