import { HandlerType } from './index';
import { MovieScreen } from 'modules/movie';

const MovieHandlers: HandlerType = {
  path: '/movie/:id',
  name: 'Movie',
  component: MovieScreen,
  exact: false,
  strict: false,
  sensitive: false
};

export default MovieHandlers;
