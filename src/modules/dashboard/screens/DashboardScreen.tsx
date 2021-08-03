import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { HorizontalMovieList, SearchBar } from 'components/common';
import { ThemesState } from 'modules/themes';
import { getPopular, getSearch } from 'modules/dashboard/repositories';
import {
  DashboardState,
  setNowPlayingMovies,
  setPopularMovies,
  setSearchMovies,
  setUpcomingMovies
} from 'modules/dashboard/redux';
import { getNowPlaying } from 'modules/dashboard/repositories';
import getUpcoming from '../repositories/movies/getUpcoming';
import { isEmpty } from 'lodash';

export interface DashboardScreenProps {}

export const DashboardScreenContainer = styled.main`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

function DashboardScreen({}: DashboardScreenProps): JSX.Element {
  const dispatcher = useDispatch();

  const [query, setQuery] = useState('');

  const { current }: ThemesState = useSelector(
    ({ theme }: { theme: ThemesState }) => theme
  );

  const { movies: dashboardMovies } = useSelector(
    ({ dashboard }: { dashboard: DashboardState }) => dashboard
  );

  useEffect(() => {
    if (query) {
      getSearch(query).then(({ data }: any) => {
        dispatcher(
          setSearchMovies({
            error: isEmpty(data.results) ? 'Not found Movies' : '',
            isLoading: false,
            movies: data.results
          })
        );
      });
    }
  }, [query]);

  useEffect(() => {
    getPopular().then(({ data }: any) => {
      dispatcher(
        setPopularMovies({
          error: isEmpty(data.results) ? 'Not found Popular Movies' : '',
          isLoading: false,
          movies: data.results
        })
      );
    });

    getUpcoming().then(({ data }: any) => {
      dispatcher(
        setUpcomingMovies({
          error: isEmpty(data.results) ? 'Not found Upcoming Movies' : '',
          isLoading: false,
          movies: data.results
        })
      );
    });

    getNowPlaying().then(({ data }: any) => {
      dispatcher(
        setNowPlayingMovies({
          error: isEmpty(data.results) ? 'Not found NowPlaying Movies' : '',
          isLoading: false,
          movies: data.results
        })
      );
    });
  }, []);

  const hasQueryData =
    !!query &&
    !!dashboardMovies &&
    !!dashboardMovies?.search &&
    !!dashboardMovies?.search?.data;

  return (
    <DashboardScreenContainer className="dashboard_screen">
      <SearchBar query={query} setQuery={setQuery} />

      {hasQueryData && (
        <HorizontalMovieList
          title="Results"
          posterHeight={current?.movieCardPosterHeight || 450}
          posterWidth={current?.movieCardPosterWidth || 300}
          error={dashboardMovies.search.error}
          data={dashboardMovies.search.data}
          isLoading={dashboardMovies.search.isLoading}
        />
      )}

      {!hasQueryData && (
        <>
          <HorizontalMovieList
            title="Top Popular"
            posterHeight={current?.movieCardPosterHeight || 450}
            posterWidth={current?.movieCardPosterWidth || 300}
            error={dashboardMovies.popular.error}
            data={dashboardMovies.popular.data}
            isLoading={dashboardMovies.popular.isLoading}
          />

          <HorizontalMovieList
            title="Now Playing"
            posterHeight={current?.movieCardPosterHeight || 450}
            posterWidth={current?.movieCardPosterWidth || 300}
            error={dashboardMovies.nowPlaying.error}
            data={dashboardMovies.nowPlaying.data}
            isLoading={dashboardMovies.nowPlaying.isLoading}
          />

          <HorizontalMovieList
            title="Upcoming"
            posterHeight={current?.movieCardPosterHeight || 450}
            posterWidth={current?.movieCardPosterWidth || 300}
            error={dashboardMovies.upcoming.error}
            data={dashboardMovies.upcoming.data}
            isLoading={dashboardMovies.upcoming.isLoading}
          />
        </>
      )}
    </DashboardScreenContainer>
  );
}

export default forwardRef(DashboardScreen);
