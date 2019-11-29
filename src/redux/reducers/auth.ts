import { handleActions } from 'redux-actions';

import CONSTANTS from '../../utils/constants';

export const auth = handleActions(
  {
    [CONSTANTS.ACTION_CLEAN_AUTH]: (state, action) => ({}),
    [CONSTANTS.ACTION_LOGIN]: (state, action) => ({ ...state, token: action.payload })
  },
  {}
);