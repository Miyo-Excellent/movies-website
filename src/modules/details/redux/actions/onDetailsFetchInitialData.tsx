import { detailsActionsTypes, detailsInitialState, DetailsState } from '..';

export interface OnDetailsActionsPayload {}

export interface OnDetailsFetchAction {
  type: detailsActionsTypes;
  payload?: OnDetailsActionsPayload;
}

export function onDetailsFetchInitialData(
  state: DetailsState = detailsInitialState,
  action: OnDetailsFetchAction
): DetailsState {
  return { ...state, data: action.payload };
}
