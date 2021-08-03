import { isEmpty } from 'lodash';

import fetching from 'utils/fetching';
import {apiPaths} from "../../../../constants";

/*  https://developers.themoviedb.org/3/movies/get-movie-videos
    Get the videos that have been added to a movie.
    Recent Changes
    |----------------|--------------------------------------------------------------------|
    | Date           | Change                                                             |
    |----------------|--------------------------------------------------------------------|
    | March 23, 2019 | Vimeo was added as a video source                                  |
    |----------------|--------------------------------------------------------------------|
    | March 20, 2019 | "Behind the Scenes" and "Bloopers" were added as valid video types |
    |----------------|--------------------------------------------------------------------|
*/
export default async function getVideos(movieId: number, page?: number) {
  return new Promise(async function getVideosResult(resolve, reject) {
    const data = await fetching.get(`movie/${movieId}/videos`, {
      params: { page, api_key: apiPaths.themoviedbApiKey }
    });

    if (!isEmpty(data)) return resolve(data);

    return reject(data);
  });
}
