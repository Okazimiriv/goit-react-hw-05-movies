import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'service/apiService';

export const useFetchMovieCast = () => {
  const [castList, setCastList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  // console.log('cast params',params);

  useEffect(() => {  
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await getMovieCastById(id);
        console.log('cast', resp);
        setCastList(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);  

  return { castList, isLoading, error};
};