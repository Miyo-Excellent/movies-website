import { MovieDetailsModel } from 'core/models';
import { movieActionsTypes, movieInitialState, MovieState } from '.';

export interface OnMovieFetchAction {
  type: movieActionsTypes;
  payload?: MovieDetailsModel;
}
export type MovieReducerAction = OnMovieFetchAction;

export default function movieReducer(
  state: MovieState = movieInitialState,
  action: MovieReducerAction
): MovieState {
  switch (action.type) {
    case movieActionsTypes.FETCH_INITIAL_DATA:
      return {
        ...state,
        details: {
          ...state.details,
          ...action.payload
        }
      };

    default:
      return state;
  }
}
