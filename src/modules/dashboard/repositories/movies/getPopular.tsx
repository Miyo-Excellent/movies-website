import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-popular-movies
//  Get a list of the current popular movies on TMDb. This list updates daily.
export default async function getPopular(page?: number): Promise<any> {
  return new Promise(async function getPopularResult(resolve, reject) {
    const data = await fetching.get(`movie/popular`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
