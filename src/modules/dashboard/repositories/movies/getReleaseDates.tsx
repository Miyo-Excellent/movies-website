import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

/*  https://developers.themoviedb.org/3/movies/get-movie-release-dates
     Get the release date along with the certification for a movie.
     Release dates support different types:
       · Premiere
       · Theatrical (limited)
       · Theatrical
       · Digital
       · Physical
       · TV
 */
export default async function getReleaseDates(movieId: number, page?: number) {
  return new Promise(async function getReleaseDatesResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}/release_dates`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
