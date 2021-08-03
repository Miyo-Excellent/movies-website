import { Dispatch } from 'redux';

import { MovieDetailsModel } from 'core/models';
import { movieActionsTypes, MovieReducerAction } from '..';

export interface onMovieFetchInitialDataOptions {
  payload: MovieDetailsModel;
}
export function onMovieFetchInitialData({
  payload
}: onMovieFetchInitialDataOptions) {
  return (dispatch: Dispatch<MovieReducerAction>) =>
    dispatch({
      type: movieActionsTypes.FETCH_INITIAL_DATA,
      payload
    });
}
