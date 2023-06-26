import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'service/apiService';

export const useFetchSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchMovies = searchParams.get('query');

    if (!searchMovies) return;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await getSearchMovies(searchMovies);
        //console.log('resp', resp);
        setMovies(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleChangeSearch = query => {
    setSearchParams({ query });
  };

  return { movies, isLoading, error, handleChangeSearch};
};