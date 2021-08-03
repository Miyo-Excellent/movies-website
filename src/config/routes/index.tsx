import { isDevelopment } from 'utils';
import Navigation from './Navigation';
import Navigator from './Navigator';
import pkg from '../../../package.json';

export const routePrefix: string = isDevelopment() ? '/' : `/${pkg.name}/`;

export { Navigation, Navigator };
