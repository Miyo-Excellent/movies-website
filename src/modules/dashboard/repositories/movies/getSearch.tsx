import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-latest-movie
//  Get the most newly created movie. This is a live response and will continuously change.
export default async function getSearch(
  query: string,
  page?: number,
  includeAdult: boolean = false
) {
  return new Promise(async function getSearchResult(resolve, reject) {
    if (!query) return;

    const data = await fetching.get(`search/movie`, {
      params: {
        query,
        page,
        include_adult: includeAdult,
        api_key: apiPaths.themoviedbApiKey
      }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
