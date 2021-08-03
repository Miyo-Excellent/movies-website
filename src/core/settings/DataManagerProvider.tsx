import React from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { queryClient, store, ThemeManager } from '.';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export interface DataManagerProviderProps {
  children?: JSX.Element;
}

export default function DataManagerProvider({
  children
}: DataManagerProviderProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeManager>{children}</ThemeManager>
      </Provider>
    </QueryClientProvider>
  );
}
