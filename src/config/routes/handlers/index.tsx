import { ComponentClass, FC } from 'react';

import DashboardHandlers from './DashboardHandlers';
import MovieHandlers from './MovieHandlers';
import NotFountHandlers from './NotFountHandlers';

export interface HandlerType {
  path?: string;
  name?: string;
  component: FC<any> | JSX.Element | ComponentClass;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

export const handlersCollection: HandlerType[] = [
  DashboardHandlers,
  MovieHandlers,
  NotFountHandlers
];

export { MovieHandlers, DashboardHandlers, NotFountHandlers };
