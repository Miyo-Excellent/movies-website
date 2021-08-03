import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-movie-translations
//  Get a list of translations that have been created for a movie.
export default async function getTranslations(movieId: number, page?: number) {
  return new Promise(async function getTranslationsResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}/translations`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
