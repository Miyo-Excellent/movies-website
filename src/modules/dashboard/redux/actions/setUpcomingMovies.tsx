import { Dispatch } from 'redux';

import { MovieModel } from 'core/models';
import { DashboardActionsTypes, DashboardReducerAction } from '..';

export interface setUpcomingMoviesOptions {
  isLoading: boolean;
  error: string;
  movies: MovieModel[];
}
export function setUpcomingMovies({
  movies = [],
  isLoading = true,
  error = ''
}: setUpcomingMoviesOptions) {
  return async (dispatch: Dispatch<DashboardReducerAction>) =>
    dispatch({
      type: DashboardActionsTypes.FETCH_UPCOMING_MOVIES_DATA,
      payload: {
        isLoading,
        error,
        data: movies || []
      }
    });
}
