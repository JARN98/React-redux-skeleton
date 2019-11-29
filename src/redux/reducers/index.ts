import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import { auth } from './auth';

export default combineReducers<any>({
  localize: localizeReducer,
  auth
});