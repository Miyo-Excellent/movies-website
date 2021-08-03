import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-movie-details
//  Get the primary information about a movie.
//  Supports [append_to_response]. Read more about this https://developers.themoviedb.org/3/getting-started/append-to-response.
export default async function getDetails(movieId: number) {
  return new Promise(async function getDetailsResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}`, {
      params: { api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
