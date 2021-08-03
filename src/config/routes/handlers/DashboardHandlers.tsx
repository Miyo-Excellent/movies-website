import { HandlerType } from './index';
import { DashboardScreen } from 'modules/dashboard';

const DashboardHandlers: HandlerType = {
  path: '/',
  name: 'Dashboard',
  component: DashboardScreen,
  exact: true,
  strict: false,
  sensitive: false
};

export default DashboardHandlers;
