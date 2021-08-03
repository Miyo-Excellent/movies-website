import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-top-rated-movies
//  Get the top rated movies on TMDb.
export default async function getTopRated(page?: number) {
  return new Promise(async function getTopRatedResult(resolve, reject) {
    const data = await fetching.get(`movie/top_rated`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
