import axios from 'axios';

// --url 'https://api.themoviedb.org/3/movie/11?api_key=75f1193eb903abcb6bf848342ccb4206'

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
};

const trendings = '/trending/movie/day';
const search = '/search/movie';
// const movie = '/movie/';
// const details = '/movie/movie_id';
// const credits = '/movie/movie_id/credits';
// const reviews = '/movie/movie_id/reviews';

export const getTrandingMovies = async (page = 1) => {
  const { data } = await axios.get(trendings);
  return data;
};

//api.themoviedb.org/3/search/movie?api_key=75f1193eb903abcb6bf848342ccb4206&query=batman

export const getSearchMovies = async query => {
  const { data } = await axios.get(search);
  return data;
};

// export const getMoviesById = async id => {
//   const { data } = await axios.get('movie/${id}');
//   return data;
// };
