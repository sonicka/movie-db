import axios from "axios";
import {
  apiKey,
  baseUrl,
  CategoryType,
  DataType,
  movieGenres
} from "./constants";

/** Function to fetch popular movies/tv shows */
export const fetchPopular = (category: CategoryType): any => {
  return axios
    .get(`${baseUrl}/3/${category}/popular?api_key=${apiKey}`, {})
    .then(function(response) {
      return response.data.results;
    })
    .catch(function(error) {
      throw error;
    });
};

/** Function to fetch movies of given genre */
export const fetchFromGenre = (genre: DataType): any => {
  const genreWithId = movieGenres.find((g: any) => {
    return g.name === genre;
  });

  if (genreWithId) {
    return axios
      .get(
        `${baseUrl}/3/discover/movie?api_key=${apiKey}&with_genres=${genreWithId.id}`
      )
      .then(function(response) {
        return response.data.results;
      })
      .catch(function(error) {
        throw error;
      });
  }
};

/** Function to fetch detail information about movie/tv show */
export const fetchDetail = (category: CategoryType, id: number): any => {
  return axios
    .get(
      `${baseUrl}/3/${category}/${id}?api_key=${apiKey}&append_to_response=videos`
    )
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      throw error;
    });
};

/** Function to search through movies/tv shows by given query */
export const searchMovies = (query: string): any => {
  return axios
    .get(
      `${baseUrl}/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(function(response) {
      return response.data.results;
    })
    .catch(function(error) {
      throw error;
    });
};
