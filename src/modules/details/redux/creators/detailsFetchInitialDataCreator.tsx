import { Dispatch } from 'redux';

import { detailsActionsTypes, DetailsReducerAction } from '../';

export default function detailsFetchInitialDataCreator() {
  return (dispatch: Dispatch<DetailsReducerAction>) =>
    dispatch({
      type: detailsActionsTypes.FETCH_INITIAL_DATA,
      payload: {}
    });
}
