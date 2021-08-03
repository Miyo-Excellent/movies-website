import { Dispatch } from 'redux';

import { MovieModel } from 'core/models';
import { DashboardActionsTypes, DashboardReducerAction } from '..';

export interface setLatestMovieOptions {
  isLoading: boolean;
  error: string;
  movies: MovieModel[];
}
export function setLatestMovie({
  movies = [],
  isLoading = true,
  error = ''
}: setLatestMovieOptions) {
  return async (dispatch: Dispatch<DashboardReducerAction>) =>
    dispatch({
      type: DashboardActionsTypes.FETCH_LATEST_MOVIES_DATA,
      payload: {
        isLoading,
        error,
        data: movies || []
      }
    });
}
