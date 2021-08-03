import { MovieModel } from 'core/models';

export interface DashboardMoviesCollectionState {
  error: string;
  isLoading: boolean;
  data: MovieModel[];
}
export interface DashboardMoviesState {
  popular: DashboardMoviesCollectionState;
  nowPlaying: DashboardMoviesCollectionState;
  latest: DashboardMoviesCollectionState;
  recommendations: DashboardMoviesCollectionState;
  upcoming: DashboardMoviesCollectionState;
  search: DashboardMoviesCollectionState;
}

export interface DashboardState {
  movies: DashboardMoviesState;
}

export const dashboardInitialMoviesCollectionState: DashboardMoviesCollectionState =
  {
    error: '',
    isLoading: true,
    data: []
  };

export const dashboardInitialState: DashboardState = {
  movies: {
    popular: dashboardInitialMoviesCollectionState,
    nowPlaying: dashboardInitialMoviesCollectionState,
    upcoming: dashboardInitialMoviesCollectionState,
    latest: {
      ...dashboardInitialMoviesCollectionState,
      isLoading: false
    },
    recommendations: {
      ...dashboardInitialMoviesCollectionState,
      isLoading: false
    },
    search: {
      ...dashboardInitialMoviesCollectionState,
      isLoading: false
    }
  }
};
