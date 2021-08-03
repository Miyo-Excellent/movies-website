import React from 'react';
import styled from 'styled-components';

export interface SearchResultsProps {
  children: JSX.Element | JSX.Element[];
}

export const SearchResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  
  & > * {
    margin: 1rem !important;
  }
`;

export default function SearchResults({
  children
}: SearchResultsProps): JSX.Element {
  return <SearchResultsContainer>{children}</SearchResultsContainer>;
}
