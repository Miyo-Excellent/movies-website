import { FC } from 'react';
import DashboardHandlers from './DashboardHandlers';
import DetailsHandlers from './DetailsHandlers';
import NotFountHandlers from './NotFountHandlers';

export interface HandlerType {
  path?: string;
  name?: string;
  component: FC<any>;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

export const handlersCollection: HandlerType[] = [
  DashboardHandlers,
  DetailsHandlers,
  NotFountHandlers
];

export { DetailsHandlers, DashboardHandlers, NotFountHandlers };
