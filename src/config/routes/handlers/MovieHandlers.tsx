import { MovieScreen } from 'modules/movie';
import { isDevelopment } from 'utils';
import { HandlerType } from '.';
import pkg from '../../../../package.json';

const MovieHandlers: HandlerType = {
  path: `${isDevelopment() ? pkg.name : ''}/movie/:id`,
  name: 'Movie',
  component: MovieScreen,
  exact: false,
  strict: false,
  sensitive: false
};

export default MovieHandlers;
