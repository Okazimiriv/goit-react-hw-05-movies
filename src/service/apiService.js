import axios from 'axios';

// --url 'https://api.themoviedb.org/3/movie/11?api_key=75f1193eb903abcb6bf848342ccb4206'

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
};

// const names = {
//   trendings: '/trending/movie/day',
//   search: '/search/movie',
//   movie: '/movie/',
//   details: '/movie/movie_id',
//   credits: '/movie/movie_id/credits',
//   reviews: '/movie/movie_id/reviews',
// };

export const getTrandingMovies = async (page = 1) => {
  const { data } = await axios.get('/trending/movie/day');
  return data;
};

// export const getMoviesById = async id => {
//   const { data } = await axios.get('movie/${id}');
//   return data;
// };
