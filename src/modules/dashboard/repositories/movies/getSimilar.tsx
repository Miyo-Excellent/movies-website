import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-similar-movies
//  Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
//  These items are assembled by looking at keywords and genres.
export default async function getSimilar(movieId: number, page?: number) {
  return new Promise(async function getSimilarResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}/similar`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
