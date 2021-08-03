import { Dispatch } from 'redux';

import { MovieModel } from 'core/models';
import { DashboardActionsTypes, DashboardReducerAction } from '..';

export interface setRecommendationsMoviesOptions {
  isLoading: boolean;
  error: string;
  movies: MovieModel[];
}
export function setRecommendationsMovies({
  movies = [],
  isLoading = true,
  error = ''
}: setRecommendationsMoviesOptions) {
  return async (dispatch: Dispatch<DashboardReducerAction>) =>
    dispatch({
      type: DashboardActionsTypes.FETCH_RECOMMENDATIONS_MOVIES_DATA,
      payload: {
        isLoading,
        error,
        data: movies || []
      }
    });
}
