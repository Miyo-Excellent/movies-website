import { MovieScreen } from 'modules/movie';
import {HandlerType} from '.';
import {routePrefix} from "..";

const MovieHandlers: HandlerType = {
  path: `${routePrefix}/movie/:id`,
  name: 'Movie',
  component: MovieScreen,
  exact: false,
  strict: false,
  sensitive: false
};

export default MovieHandlers;
