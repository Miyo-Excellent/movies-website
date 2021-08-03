import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-movie-keywords
//  Get the keywords that have been added to a movie.
export default async function getKeywords(movieId: number, page?: number) {
  return new Promise(async function getKeywordsResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}/keywords}`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
