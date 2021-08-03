import { Redirect } from 'react-router-dom';

import { DashboardScreen } from 'modules/dashboard';
import {isDevelopment} from "utils";
import { HandlerType } from '.';
import { Navigator } from '..';
import pkg from '../../../../package.json';

const ProductionDashboardSubHandlers: JSX.Element = <Navigator routes={[
  {
    path: '/',
    component: <Redirect to={`/${pkg.name}`} />,
    name: 'Dashboard Root',
    exact: true,
    strict: false,
    sensitive: false
  },
  {
    path: `/${pkg.name}`,
    component: DashboardScreen,
    name: 'Dashboard Main',
    exact: false,
    strict: false,
    sensitive: false
  }
]} />;

const DevelopmentDashboardSubHandlers = DashboardScreen;

const routes = isDevelopment()
  ? DevelopmentDashboardSubHandlers
  : ProductionDashboardSubHandlers;

const DashboardHandlers: HandlerType = {
  path: '/',
  name: 'Dashboard',
  component: routes,
  exact: true,
  strict: false,
  sensitive: false
};

export default DashboardHandlers;
