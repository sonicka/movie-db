import axios from "axios";
import { CategoryType, DataType, movieGenres } from "./constants";

const apiKey = "f2725be090399a7f43df4c69b352f2f3"; // todo
const baseUrl = "https://api.themoviedb.org";

//todo check actions
export const fetchPopular = (category: CategoryType): any => {
  return axios
    .get(`${baseUrl}/3/${category}/popular?api_key=${apiKey}`, {})
    .then(function(response) {
      // handle success
      return response.data.results;
    })
    .catch(function(error) {
      // handle error
      throw error;
    })
    .finally(function() {
      // always executed
    });
};

export const fetchFromGenre = (genre: DataType): any => {
  const genreWithId = movieGenres.find((g: any) => {
    return g.name === genre;
  });

  if (genreWithId) {
    return axios
      .get(
        `${baseUrl}/3/discover/movie?api_key=${apiKey}&with_genres=${genreWithId.id}`,
        {}
      )
      .then(function(response) {
        // handle success
        return response.data.results;
      })
      .catch(function(error) {
        // handle error
        throw error;
      })
      .finally(function() {
        // always executed
      });
  }
};

export const fetchDetail = (category: CategoryType, id: number): any => {
  return axios
    .get(
      `${baseUrl}/3/${category}/${id}?api_key=${apiKey}&append_to_response=videos`,
      {}
    )
    .then(function(response) {
      // handle success
      return response.data;
    })
    .catch(function(error) {
      // handle error
      throw error;
    })
    .finally(function() {
      // always executed
    });
};

export const searchMovies = (query: string): any => {
  return axios
    .get(
      `${baseUrl}/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
      {}
    )
    .then(function(response) {
      // handle success
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function(error) {
      // handle error
      throw error;
    })
    .finally(function() {
      // always executed
    });
};
