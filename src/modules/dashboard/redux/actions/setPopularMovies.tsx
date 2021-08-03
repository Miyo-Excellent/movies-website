import { Dispatch } from 'redux';

import { MovieModel } from 'core/models';
import { DashboardActionsTypes, DashboardReducerAction } from '..';

export interface setPopularMoviesOptions {
  isLoading: boolean;
  error: string;
  movies: MovieModel[];
}
export function setPopularMovies({
  movies = [],
  isLoading = true,
  error = ''
}: setPopularMoviesOptions) {
  return async (dispatch: Dispatch<DashboardReducerAction>) =>
    dispatch({
      type: DashboardActionsTypes.FETCH_POPULAR_MOVIES_DATA,
      payload: {
        isLoading,
        error,
        data: movies || []
      }
    });
}
