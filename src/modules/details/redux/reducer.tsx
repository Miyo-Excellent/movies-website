import {
  detailsActionsTypes,
  detailsInitialState,
  DetailsState,
  OnDetailsFetchAction,
  onDetailsFetchInitialData
} from '.';

export type DetailsReducerAction = OnDetailsFetchAction;

export default function detailsReducer(
  state: DetailsState = detailsInitialState,
  action: DetailsReducerAction
) {
  switch (action.type) {
    case detailsActionsTypes.FETCH_INITIAL_DATA:
      return onDetailsFetchInitialData(state, action);

    default:
      return state;
  }
}
