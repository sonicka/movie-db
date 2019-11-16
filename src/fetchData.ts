import axios from "axios";

const apiKey = "f2725be090399a7f43df4c69b352f2f3";
const baseUrl = "https://api.themoviedb.org";

type CATEGORY = "movie" | "tv";
type GENRE = "family" | "documentary";

export const fetchPopular = (category: CATEGORY, setRes: any): any => {
  axios
    .get(`${baseUrl}/3/${category}/popular?api_key=${apiKey}`, {})
    .then(function(response) {
      // handle success
      setRes(response.data.results);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
};

export const fetchFromCategory = (genre: GENRE, setRes: any): any => {
  let genreId = genre === "family" ? "10751" : "99";

  axios
    .get(
      `${baseUrl}/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`,
      {}
    )
    .then(function(response) {
      // handle success
      setRes(response.data.results);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
};

// todo
export const fetchMovie = (category: string): {} => {
  let fetchedMovie = {};
  return fetchMovie;
};

// todo
export const searchMovies = (query: string): {} => {
  let fetchedMovie = {};
  return fetchMovie;
};
