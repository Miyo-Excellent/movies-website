import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Hero } from 'components/common';
import { getDetails } from 'modules/movie/repositories';
import { MovieState, onMovieFetchInitialData } from 'modules/movie/redux';

export interface MovieScreenProps {}

export const MovieScreenContainer = styled.main``;

export default function MovieScreen({}: MovieScreenProps): JSX.Element {
  const dispatcher = useDispatch();

  const { id }: { id: string } = useParams();

  const { details } = useSelector(({ movie }: { movie: MovieState }) => movie);

  useEffect(() => {
    getDetails(Number(id)).then(({ data }: any) => {
      dispatcher(onMovieFetchInitialData({ payload: data }));
    });
  }, []);

  return (
    <MovieScreenContainer className="movie_screen">
      <Hero data={details} height="80vh" />
    </MovieScreenContainer>
  );
}
