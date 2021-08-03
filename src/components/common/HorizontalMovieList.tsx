import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Typography } from '@material-ui/core';

import { MovieModel } from 'core/models';
import { MovieCard } from '.';

export interface HorizontalMovieListProps {
  title: string;
  error: string;
  isLoading: boolean;
  data: MovieModel[];
  posterHeight: number;
  posterWidth: number;
}

export const HorizontalMovieListTitle = styled(Typography)`
  padding: 1rem 1rem 0 1rem;
`;

export const horizontalMovieListDefaultMovies: MovieModel[] = [];

export const HorizontalMovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  height: auto;
  overflow: hidden;
  overflow-x: auto;
`;

export const HorizontalMovieListItemContainer = styled.div`
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  overflow: hidden;
  display: grid;
  margin: 0 1rem 0 0;
  padding: 0;

  &:last-child {
    margin: 0;
  }
`;

export const HorizontalMovieListNoScroll = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 1rem;
`;

export default function HorizontalMovieList({
  title = '',
  error = '',
  data = horizontalMovieListDefaultMovies,
  isLoading = true,
  posterHeight = 300,
  posterWidth = 300
}: HorizontalMovieListProps): JSX.Element {
  let content = (
    <HorizontalMovieListNoScroll className="horizontal_movie_list__no_scroll">
      <HorizontalMovieListTitle
        variant="h4"
        className="horizontal_movie_list__title"
      >
        {title}
      </HorizontalMovieListTitle>

      <HorizontalMovieListContainer className="horizontal_movie_list">
        {Array.isArray(data) &&
          data.map((movie: MovieModel) => (
            <HorizontalMovieListItemContainer
              className="horizontal_movie_list_item"
              key={nanoid()}
            >
              <MovieCard
                data={movie}
                posterWidth={posterWidth}
                posterHeight={posterHeight}
              />
            </HorizontalMovieListItemContainer>
          ))}
      </HorizontalMovieListContainer>
    </HorizontalMovieListNoScroll>
  );

  if (isLoading) {
    content = (
      <h1 className="horizontal_movies_list__loading_text">...Loading data</h1>
    );
  }

  if (error) {
    content = (
      <h1 className="horizontal_movies_list__error_text">Was a error</h1>
    );
  }

  return content;
}
