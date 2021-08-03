import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-movie-reviews
//  Get the user reviews for a movie.
export default async function getReviews(movieId: number, page?: number) {
  return new Promise(async function getReviewsResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}/reviews`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
