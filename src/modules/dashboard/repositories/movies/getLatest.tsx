import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-latest-movie
//  Get the most newly created movie. This is a live response and will continuously change.
export default async function getLatest(page?: number) {
  return new Promise(async function getLatestResult(resolve, reject) {
    const data = await fetching.get(`movie/latest`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
