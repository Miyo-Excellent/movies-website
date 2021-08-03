import { Dispatch } from 'redux';

import { DashboardActionsTypes, DashboardReducerAction } from '..';

export function setInitialData(): any {
  return (dispatch: Dispatch<DashboardReducerAction>) =>
    dispatch({
      type: DashboardActionsTypes.FETCH_INITIAL_DATA
      // payload: {}
    });
}
