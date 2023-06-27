import axios from 'axios';

// --url 'https://api.themoviedb.org/3/movie/11?api_key=75f1193eb903abcb6bf848342ccb4206'

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
};

const trendings = '/trending/movie/day';
const search = '/search/movie';
const movie = '/movie/';

export const getTrandingMovies = async (page = 1) => {
  const { data } = await axios.get(trendings);
  return data;
};

// --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=75f1193eb903abcb6bf848342ccb4206'
export const getSearchMovies = async query => {
  const { data } = await axios.get(`${search}?query=${query}`);
  return data;
};

// --url 'https://api.themoviedb.org/3/movie/movie_id?language=en-US' \
export const getMovieById = async id => {
  const { data } = await axios.get(`${movie}${id}`);
  return data;
};

export const getMovieCastById = async id => {
  const { data } = await axios.get(`${movie}${id}/credits`);
  return data;
};

export const getMovieReviewsById = async id => {
  const response = await axios.get(`${movie}${id}/reviews`);
  return response;
};
