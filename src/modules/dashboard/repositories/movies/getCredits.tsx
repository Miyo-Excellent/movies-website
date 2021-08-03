import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-movie-credits
//  Get the cast and crew for a movie.
export default async function getCredits(movieId: number, page?: number) {
  return new Promise(async function getCreditsResult(resolve, reject) {
    const url = `movie/${movieId}/credits`;

    const data = await fetching.get(url, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
