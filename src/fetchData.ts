import axios from "axios";

const apiKey = "f2725be090399a7f43df4c69b352f2f3";
const baseUrl = "https://api.themoviedb.org";

export type CATEGORY = "movie" | "tv";
type GENRE = "family" | "documentary";

export const fetchPopular = (category: CATEGORY): any => {
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

export const fetchFromGenre = (genre: GENRE): any => {
  let genreId = genre === "family" ? "10751" : "99";

  return axios
    .get(
      `${baseUrl}/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`,
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
};

// todo
export const fetchDetail = (category: CATEGORY, id: number): any => {
  return axios
    .get(`${baseUrl}/3/${category}/${id}?api_key=${apiKey}`, {})
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

// todo
export const searchMovies = (query: string): {} => {
  let fetchedMovie = {};
  return fetchedMovie;
};
