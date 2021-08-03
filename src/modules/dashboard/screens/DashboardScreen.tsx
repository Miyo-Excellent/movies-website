import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';

import { MovieModel } from 'core/models';
import { routePrefix } from 'config';
import { HorizontalMovieList, MovieCard, SearchBar } from 'components/common';
import { ThemesState } from 'modules/themes';
import {
  DashboardState,
  setNowPlayingMovies,
  setPopularMovies,
  setSearchMovies,
  setUpcomingMovies
} from 'modules/dashboard/redux';
import {
  getPopular,
  getSearch,
  getNowPlaying,
  getUpcoming
} from 'modules/dashboard/repositories';
import SearchResults from '../../../components/common/SearchResults';
import { nanoid } from 'nanoid';

export interface DashboardScreenProps {}

export const DashboardScreenContainer = styled.main`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  padding: 0 0 70px 0
`;

export default function DashboardScreen({}: DashboardScreenProps): JSX.Element {
  const history = useHistory();
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

  const onClickMovie = async (event: any, movie: MovieModel) => {
    event?.preventDefault();

    if (movie) {
      const path: string = `${routePrefix}movie/${movie.id}`;

      history?.push(path, movie);
    }
  };

  return (
    <DashboardScreenContainer className="dashboard_screen">
      <SearchBar query={query} setQuery={setQuery} />

      {hasQueryData && (
        <SearchResults>
          {dashboardMovies.search.data.map((data: MovieModel) => (
            <MovieCard key={nanoid()} data={data} onClick={onClickMovie} />
          ))}
        </SearchResults>
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
            onClick={onClickMovie}
          />

          <HorizontalMovieList
            title="Now Playing"
            posterHeight={current?.movieCardPosterHeight || 450}
            posterWidth={current?.movieCardPosterWidth || 300}
            error={dashboardMovies.nowPlaying.error}
            data={dashboardMovies.nowPlaying.data}
            isLoading={dashboardMovies.nowPlaying.isLoading}
            onClick={onClickMovie}
          />

          <HorizontalMovieList
            title="Upcoming"
            posterHeight={current?.movieCardPosterHeight || 450}
            posterWidth={current?.movieCardPosterWidth || 300}
            error={dashboardMovies.upcoming.error}
            data={dashboardMovies.upcoming.data}
            isLoading={dashboardMovies.upcoming.isLoading}
            onClick={onClickMovie}
          />
        </>
      )}
    </DashboardScreenContainer>
  );
}
