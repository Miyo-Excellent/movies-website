import { MovieDetailsModel } from 'core/models';

export interface MovieState {
  details: MovieDetailsModel;
}

export const movieInitialState: MovieState = {
  details: {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: {
      id: 0,
      name: '',
      poster_path: '',
      backdrop_path: ''
    },
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [
      {
        iso_3166_1: '',
        name: ''
      }
    ],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  }
};
