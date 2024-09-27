import axios from "axios";

export const getListMovies = (callback) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=972ebb6ab16e8ccb19b26f13ab26dd64`
    )
    .then((response) => {
      callback(response.data || []);
    })
    .catch((error) => {
      callback(error.data);
    });
};
