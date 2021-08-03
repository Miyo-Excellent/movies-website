import { Dispatch } from 'redux';

import { MovieModel } from 'core/models';
import { DashboardActionsTypes, DashboardReducerAction } from '..';

export interface setNowPlayingMoviesOptions {
  isLoading: boolean;
  error: string;
  movies: MovieModel[];
}
export function setNowPlayingMovies({
  movies = [],
  isLoading = true,
  error = ''
}: setNowPlayingMoviesOptions) {
  return async (dispatch: Dispatch<DashboardReducerAction>) =>
    dispatch({
      type: DashboardActionsTypes.FETCH_NOW_PLAYING_MOVIES_DATA,
      payload: {
        isLoading,
        error,
        data: movies || []
      }
    });
}
