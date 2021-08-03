import {
  DashboardActionsTypes,
  dashboardInitialState,
  DashboardMoviesCollectionState,
  DashboardState
} from '.';

export type DashboardReducerAction = {
  type: string;
  payload?: DashboardMoviesCollectionState;
};

export default function dashboardReducer(
  state: DashboardState = dashboardInitialState,
  action: DashboardReducerAction
): DashboardState {
  switch (action.type) {
    case DashboardActionsTypes.FETCH_POPULAR_MOVIES_DATA:
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: {
            ...state.movies.popular,
            ...action.payload
          }
        }
      };

    case DashboardActionsTypes.FETCH_RECOMMENDATIONS_MOVIES_DATA:
      return {
        ...state,
        movies: {
          ...state.movies,
          recommendations: {
            ...state.movies.recommendations,
            ...action.payload
          }
        }
      };

    case DashboardActionsTypes.FETCH_UPCOMING_MOVIES_DATA:
      return {
        ...state,
        movies: {
          ...state.movies,
          upcoming: {
            ...state.movies.upcoming,
            ...action.payload
          }
        }
      };

    case DashboardActionsTypes.FETCH_SEARCH_MOVIES_DATA:
      return {
        ...state,
        movies: {
          ...state.movies,
          search: {
            ...state.movies.search,
            ...action.payload
          }
        }
      };

    case DashboardActionsTypes.FETCH_LATEST_MOVIES_DATA:
      return {
        ...state,
        movies: {
          ...state.movies,
          latest: {
            ...state.movies.latest,
            ...action.payload
          }
        }
      };

    case DashboardActionsTypes.FETCH_NOW_PLAYING_MOVIES_DATA:
      return {
        ...state,
        movies: {
          ...state.movies,
          nowPlaying: {
            ...state.movies.nowPlaying,
            ...action.payload
          }
        }
      };

    case DashboardActionsTypes.FETCH_INITIAL_DATA:
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: {
            ...state.movies.popular
          }
        }
      };

    default:
      return state;
  }
}
