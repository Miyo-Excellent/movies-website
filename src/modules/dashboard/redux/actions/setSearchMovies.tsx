import { Dispatch } from 'redux';

import { MovieModel } from 'core/models';
import { DashboardActionsTypes, DashboardReducerAction } from '..';

export interface setSearchMoviesOptions {
  isLoading: boolean;
  error: string;
  movies: MovieModel[];
}
export function setSearchMovies({
  movies = [],
  isLoading = false,
  error = ''
}: setSearchMoviesOptions) {
  return async (dispatch: Dispatch<DashboardReducerAction>) =>
    dispatch({
      type: DashboardActionsTypes.FETCH_SEARCH_MOVIES_DATA,
      payload: {
        isLoading,
        error,
        data: movies || []
      }
    });
}
