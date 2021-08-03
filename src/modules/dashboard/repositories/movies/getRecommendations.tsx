import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-movie-recommendations
//  Get a list of recommended movies for a movie.
export default async function getRecommendations(
  movieId: number,
  page?: number
) {
  return new Promise(async function getRecommendationsResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}/recommendations`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
