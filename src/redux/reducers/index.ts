import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import { auth } from './auth';
import { publications } from './publications';


export default combineReducers<any>({
  localize: localizeReducer,
  auth,
  publications
});