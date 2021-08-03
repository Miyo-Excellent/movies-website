import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import {CssBaseline} from "@material-ui/core";

import { ThemesState } from 'modules/themes';
import { GlobalStyles } from '.';

export interface ThemeManagerProps {
  children?: JSX.Element;
}

export default function ThemeManager({
  children
}: ThemeManagerProps): JSX.Element {
  const theme: ThemesState = useSelector(({ theme }: any) => theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalStyles />

      {children}
    </ThemeProvider>
  );
}
