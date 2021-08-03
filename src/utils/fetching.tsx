import axios from 'axios';
import { apiPaths } from '../constants';

export default axios.create({
  baseURL: `${apiPaths.themoviedbUrl}/3/`,
  timeout: 1000
});
