import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '75f1193eb903abcb6bf848342ccb4206';

// --url 'https://api.themoviedb.org/3/movie/11?api_key=75f1193eb903abcb6bf848342ccb4206'

const names = {
  trendings: '/trending/movie/day',
  search: '/search/movie',
  movie: '/movie/',
  details: '/movie/movie_id',
  credits: '/movie/movie_id/credits',
  reviews: '/movie/movie_id/reviews',
};

export const fetchTrendings = async () => {
  const { data } = await axios.get(
    `${BASE_URL}${names.trendings}?api_key=${API_KEY}`
  );

  return data;
};
