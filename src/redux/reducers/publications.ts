import { handleActions } from 'redux-actions';

import CONSTANTS from '../../utils/constants';
const initialValues = {
  list: [] as any,
  one: {} as any
}
export const publications = handleActions(
  {
    [CONSTANTS.ACTION_CLEAN_PUBLICATIONS]: (state, action) => (initialValues),
    [CONSTANTS.PUBLICATIONS_GET]: (state, action) => ({ ...state, list: action.payload }),
    [CONSTANTS.PUBLICATIONS_GET_ONE]: (state, action) => ({ ...state, one: action.payload }),
    [CONSTANTS.PUBLICATIONS_UPDATE_ONE]: (state, action) => ({ ...state, one: action.payload })


  },
  initialValues
);