import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import { apiPaths } from '../../../../constants';

//  https://developers.themoviedb.org/3/movies/get-upcoming
//  Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
//  You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
export default async function getUpcoming(page?: number) {
  return new Promise(async function getUpcomingResult(resolve, reject) {
    const data = await fetching.get(`movie/upcoming`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
