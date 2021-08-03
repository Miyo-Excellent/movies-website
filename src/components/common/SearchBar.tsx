import React from 'react';
import styled from 'styled-components';
import { InputBase, Paper, IconButton, Divider } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

export interface SearchBarProps {
  placeholder?: string;
  query: string;
  setQuery: (text: string) => any;
}

export const SearchBarContainer = styled<any>(Paper)`
  display: grid;
  display: flex;
  alignitems: center;
  margin: 1rem;
  flex: 1;
`;

export const SearchBarInput = styled(InputBase)`
  margin: 0 0 0 1rem;
  width: 100%;
  flex: 1;
`;

export const SearchBarIconButton = styled(IconButton)`
  padding: 10px;
`;

export const SearchBarDivider = styled(Divider)`
  height: 28px;
  margin: 4px;
`;

export default function SearchBar({
  placeholder = 'Search',
  query = '',
  setQuery
}: SearchBarProps) {
  return (
    <SearchBarContainer component="form">
      <SearchBarInput
        placeholder={placeholder}
        value={query}
        onChange={async ({ target }) => setQuery(target?.value)}
        inputProps={{ 'aria-label': 'search movies' }}
      />

      <SearchBarDivider orientation="vertical" />

      <SearchBarIconButton type="submit" aria-label="search">
        <SearchIcon />
      </SearchBarIconButton>
    </SearchBarContainer>
  );
}
