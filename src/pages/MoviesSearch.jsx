import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from 'service/apiService';
import { Container } from '../App.styled';

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Loader } from 'components/Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import { ErrorMessage } from '../ErorrMessage';

const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') ?? '';

  useEffect(() => {
     if (!searchMovie) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);  

    getSearchMovies(searchMovie)
      .then(resp => {   
        if (resp.results.length === 0) setError('We have no movies for your request... 😕');
        setMovies(resp.results);
      })
      .catch(error =>
        setError('Oops! Something went wrong! Try reloading the page!')
      )
      .finally(() => setIsLoading(false));
  }, [searchMovie]);

    
  const onChangeSearch = event => {
    if (event.target.value === '') {
      setSearchParams({});
    }
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('query', query);

    if (query.trim() === '') {
      return toast.warn('Please enter key words for search movie', {
        icon: false,
      });
    }

    setSearchParams({ query });
    setQuery('');
  };

  return (
    <Container>
      <SearchForm
        value={query}
        onChange={onChangeSearch}
        onSubmit={handleSubmit}
      />
      <ToastContainer
        autoClose={3000}
        transition={Zoom}
        theme="colored"
        style={{ top: '1px' }}
      />
      {isLoading && (
        <Loader>
          <ThreeDots color="lightslategrey" />
        </Loader>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default MoviesSearch;

// const MoviesSearch = () => {
//   const { movies, isLoading, error, handleChangeSearch } = useFetchSearch();

//   return (
//     <Container>
//       <SearchForm onSubmit={handleChangeSearch} /> //
//       {isLoading && (
//         <Loader>
//           <ThreeDots color="lightslategrey" />
//         </Loader>
//       )}
//       <MoviesList movies={movies} isLoading={isLoading} />
//       {error && <ErrorMessage>{error}</ErrorMessage>}
//     </Container>
//   );
// };
