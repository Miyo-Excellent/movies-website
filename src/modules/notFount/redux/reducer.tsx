import {
  NotFountActionsTypes,
  notFountInitialState,
  NotFountState,
  OnNotFountFetchAction,
  onNotFountFetchInitialData
} from '.';

export type NotFountReducerAction = OnNotFountFetchAction;

export default function notFountReducer(
  state: NotFountState = notFountInitialState,
  action: NotFountReducerAction
) {
  switch (action.type) {
    case NotFountActionsTypes.FETCH_INITIAL_DATA:
      return onNotFountFetchInitialData(state, action);

    default:
      return state;
  }
}
