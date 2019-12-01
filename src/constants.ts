// api constants
export const apiKey = "f2725be090399a7f43df4c69b352f2f3";
export const baseUrl = "https://api.themoviedb.org";

// streams
export const manifestUri =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

// actions
export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const FETCH_DETAIL_BEGIN = "FETCH_DETAIL_BEGIN";
export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_FAILURE = "FETCH_DETAIL_FAILURE";
export const REMOVE_DETAIL = "REMOVE_DETAIL";

export const SEARCH_BEGIN = "SEARCH_BEGIN";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

// types
export type CategoryType = "movie" | "tv";
export type GenreType = "Family" | "Documentary";
export type DataType = MovieGroups;

// enums
export enum Category {
  MOVIE = "movie",
  TV = "tv"
}

export enum MovieGroups {
  POPULAR_MOVIES = "Popular_movies",
  POPULAR_SERIES = "Popular_series",
  FAMILY_MOVIES = "Family",
  DOCUMENTARIES = "Documentary"
}

// colors
export const primary = "#343fa3";
export const grey = "#d6d6d6";

// movie genres
export const movieGenres = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  }
];
