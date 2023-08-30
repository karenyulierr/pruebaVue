import axios from 'axios';

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "757d758599a8ad89d4fead00606855ff";

export const useTmdbApi = () => {
  const fetchMovies = async () => {
    try {
      const response = await axios.get(apiUrl + "/discover/movie", { params: { api_key: apiKey } });
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error;
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(apiUrl + `/movie/${movieId}`, { params: { api_key: apiKey } });
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error;
    }
  };

  return {
    fetchMovies,
    fetchMovieDetails
  };
};
