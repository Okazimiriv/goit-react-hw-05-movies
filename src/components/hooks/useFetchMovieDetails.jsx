import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'service/apiService';

export const useFetchMovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  // console.log(params);

  useEffect(() => {  
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await getMovieById(id);
        console.log('resp', resp);
        setMovie(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);  

  return { movie, isLoading, error};
};