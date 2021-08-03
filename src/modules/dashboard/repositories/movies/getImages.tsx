import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import {apiPaths} from "../../../../constants";

/*  https://developers.themoviedb.org/3/movies/get-movie-images
    Get the images that belong to a movie.
    Querying images with a language parameter will filter the results.
      If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter.
    This should be a comma seperated value like so: include_image_language=en,null.
*/
export default async function getImages(movieId: number, page?: number) {
  return new Promise(async function getImagesResult(resolve, reject) {
    const data = await fetching.get(
      `movie/${movieId}/images`, {
          params: { page, api_key: apiPaths.themoviedbApiKey }
        }
    );

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
