import React from 'react';
import styled from 'styled-components';
import { ButtonBase, Typography } from '@material-ui/core';

import { MovieModel } from 'core/models';

import { apiPaths } from '../../constants';

export interface MovieCardProps {
  data: MovieModel;
  posterHeight: number;
  posterWidth: number;
  onClick: (event: any, movie: MovieModel) => Promise<any>;
}

export interface MovieCardContainerProps {
  className: string;
  posterHeight: number;
  posterWidth: number;
}

export const Ripple = styled<any>(ButtonBase)`
  margin: 0;
  padding: 0;
  display: grid;
`;

export const MovieCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ posterWidth }: MovieCardContainerProps) =>
    posterWidth}px;
  grid-template-rows: ${({ posterHeight }: MovieCardContainerProps) =>
      posterHeight}px auto;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .movie_card_cover__movie {
      visibility: visible;
    }
  }
`;

export const MovieCardCoverMovie = styled.div`
  transition: all linear 100ms;
  visibility: hidden;
  //  background: var(--movie-card-content-container-hover-background-color);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const MovieCardCoverImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MovieCardCoverImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MovieCardContentContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--movie-card-content-container-background-color);
  transition: all linear 125ms;
`;

export const MovieCardTitle = styled(Typography)`
  text-align: center;
  color: var(--movie-card-content-text-color);
`;

export default function MovieCard({
  data,
  posterHeight = 450,
  posterWidth = 300,
  onClick = async () => undefined
}: MovieCardProps) {
  return (
    <Ripple focusRipple onClick={async (event: any) => onClick(event, data)}>
      <MovieCardContainer
        posterWidth={posterWidth}
        posterHeight={posterHeight}
        className="movie_card"
      >
        <MovieCardCoverImageContainer className="movie_card_cover__image_container">
          <MovieCardCoverImage
            alt={data.original_title}
            src={`${apiPaths.themoviedbPostersUrl}/${data.poster_path}`}
            className="movie_card_cover__image_container__image"
          />

          <MovieCardCoverMovie className="movie_card_cover__movie"></MovieCardCoverMovie>
        </MovieCardCoverImageContainer>

        <MovieCardContentContainer className="movie_card__content_container">
          <MovieCardTitle
            variant="body1"
            className="movie_card__content_container__title"
          >
            {data.original_title}
          </MovieCardTitle>
        </MovieCardContentContainer>
      </MovieCardContainer>
    </Ripple>
  );
}
