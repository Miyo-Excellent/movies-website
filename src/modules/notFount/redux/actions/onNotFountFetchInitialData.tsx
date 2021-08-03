import { NotFountActionsTypes, notFountInitialState, NotFountState } from '..';

export interface OnNotFountActionsPayload {}

export interface OnNotFountFetchAction {
  type: NotFountActionsTypes;
  payload?: OnNotFountActionsPayload;
}

export function onNotFountFetchInitialData(
  state: NotFountState = notFountInitialState,
  action: OnNotFountFetchAction
): NotFountState {
  return { ...state, data: action.payload };
}
