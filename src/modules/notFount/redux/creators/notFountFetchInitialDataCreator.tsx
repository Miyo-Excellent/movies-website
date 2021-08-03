import { Dispatch } from 'redux';

import { NotFountActionsTypes, NotFountReducerAction } from '../';

export default function notFountFetchInitialDataCreator() {
  return (dispatch: Dispatch<NotFountReducerAction>) =>
    dispatch({
      type: NotFountActionsTypes.FETCH_INITIAL_DATA,
      payload: {}
    });
}
