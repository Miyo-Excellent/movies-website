import { createGlobalStyle } from 'styled-components';
import { isNumber, kebabCase } from 'lodash';

import { ThemesState } from 'modules/themes';

export default createGlobalStyle`
  :root {
    ${({ theme }: { theme: ThemesState }) =>
      Object.entries(theme?.current || {})
        .map(
          ([key, value]) =>
            `--${kebabCase(key)}: ${isNumber(value) ? `${value}px` : value};`
        )
        .join(' ')};
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    display: grid;
  }
  
  body {
    background: $mainContainerBackgroundColor;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`;
