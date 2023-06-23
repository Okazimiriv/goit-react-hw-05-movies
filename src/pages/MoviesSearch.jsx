// import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import SearchForm from 'components/SearchForm/SearchForm';
// import MoviesList from 'components/MoviesList/MoviesList';
import { Container } from '../App.styled';
import * as ApiService from 'service/apiService';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Loader } from 'components/Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import { ErrorMessage } from '../ErorrMessage';

import { BoxMove, LinkWrap, MoveName } from '../components/MoviesList/MoviesList.styled';
import { Wrapper, Input, Icon, Button } from '../components/SearchForm/SearchForm.styled';

const MoviesSearch = () => {  
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  console.log(searchParams);

  useEffect(() => {
    if (!name) return;

    getSearchMovies();
  }, [name]);

  const getSearchMovies = (name) => {
    setIsLoading(true);
    setError(null);

    ApiService.getSearchMovies(name)
      .then(response => {       
        console.log(response.data.results);

        setMovies(response.data.results);
      })
      .catch(error =>
        setError('Oops! Something went wrong! Try reloading the page!')
      )
      .finally(() => setIsLoading(false));
  };

  const onSearchSubmit = event => {
    // event.preventDefault();

     const form = event.currentTarget;

    if (name.trim() === '') {
      return toast.warn('Please enter search movie', {
        icon: false,
      });
    }

    const nextParams = name !== '' ? { name: form.elements.name.value } : {};
    setSearchParams(nextParams);

    form.reset();
  };

  return (
    <Container>
      {/* <SearchForm onSubmit={onSearchSubmit} /> */}
      <Wrapper>
      <Icon />
      <Input
        type="text"
        // autoComplete="off"
        placeholder="Search movie"
        onSubmit={onSearchSubmit}
      />
      <Icon />
      <Button type="submit">Search</Button>
    </Wrapper>
      <ToastContainer
        autoClose={3000}
        transition={Zoom}
        theme="colored"
        style={{ top: '1px' }}
      />
      {isLoading && <Loader>
        <ThreeDots color="lightslategrey" />
      </Loader>}
      {/* <MoviesList movies={movies} /> */}
      <BoxMove>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <LinkWrap to={`/movies/${id}`}>
            <MoveName>{title}</MoveName>
          </LinkWrap>
        </li>
      ))}
    </BoxMove>
       {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default MoviesSearch;
