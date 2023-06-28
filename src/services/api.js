import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '839697383a813005be150e7d8de4d319';

const fetchTrendingMovies = async setTrendingMovies => {
  try {
    const resp = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: KEY,
      },
    });

    return await setTrendingMovies(resp.data.results);
  } catch (err) {
    console.error(err);
  }
};

const fetchQueryMovies = async (query, setQueryMovies) => {
  try {
    const resp = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: KEY,
        query,
      },
    });

    return await setQueryMovies(resp.data.results);
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieDetails = async (movieId, setMovie) => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: KEY,
      },
    });

    return await setMovie(resp.data);
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieCast = async (movieId, setMovieCast) => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
      },
    });

    return await setMovieCast(resp.data.cast);
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieReviews = async (movieId, setMovieReviews) => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
      },
    });

    return await setMovieReviews(resp.data.results);
  } catch (err) {
    console.error(err);
  }
};

const Api = {
  fetchTrendingMovies,
  fetchQueryMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};

export default Api;
