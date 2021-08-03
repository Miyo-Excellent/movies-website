import { DashboardScreen } from 'modules/dashboard';
import { HandlerType } from '.';
import { routePrefix } from '..';

const DashboardHandlers: HandlerType = {
  path: `${routePrefix}`,
  name: 'Dashboard',
  component: DashboardScreen,
  exact: true,
  strict: false,
  sensitive: false
};

export default DashboardHandlers;
