import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import { ErrorMessage } from '../ErorrMessage';
import { Container } from '../App.styled';
// import { List, StyledLink } from 'components/Home/Home.styled';
import * as ApiService from 'service/apiService';
import MoviesList from 'components/MoviesList/MoviesList';
// import { getProducts } from "../faceApi";

import { Tittle } from '../components/MoviesList/MoviesList.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    setIsLoading(true);
    setError(null);

    ApiService.getTrandingMovies()
      .then(responce => {
        console.log(responce);

        setTrendingMovies(responce.results);
      })
      .catch(error =>
        setError('Oops! Something went wrong! Try reloading the page!')
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <Container>
      <Tittle>Trending today</Tittle>
      {isLoading && <Loader>
        <ThreeDots color="lightslategrey" />
      </Loader>}
      <MoviesList movies={trendingMovies} />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Home;
