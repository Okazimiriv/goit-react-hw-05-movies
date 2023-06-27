// import { useFetchMovieCast } from 'components/hooks/useFetchMovieCast';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import { ErrorMessage } from 'ErorrMessage';
import { getMovieCastById } from 'service/apiService';

const Cast = () => {
  const [castList, setCastList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  // const { castList, isLoading, error } = useFetchMovieCast();
  // const { id, name, character, profile_path } = castList;
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getMovieCastById(id)
      .then(resp => setCastList(resp.cast))
      .catch(error =>
        setError('Oops! Something went wrong! Try reloading the page!')
      )
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <section>
      {isLoading && (
        <Loader>
          <ThreeDots color="lightslategrey" />
        </Loader>
      )}
      <ul>
        {castList.length > 0 &&
          castList.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                    alt={`${name} portrait`}
                  />
                </div>
                <p>{name}</p>
                <p>{`Character: ${character}`}</p>
              </li>
            );
          })}
      </ul>
      {/* <ul>
        <li>
          <img src="https://via.placeholder.com/200x100" alt="" />
          <p>Lorem ipsum dolor.</p>
        </li>
        <li>
          <img src="https://via.placeholder.com/200x100" alt="" />
          <p>Lorem ipsum dolor.</p>
        </li>
      </ul> */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </section>
  );
};

export default Cast;

Cast.propTypes = {
  id: PropTypes.number.isRequired,
  castInfo: PropTypes.array.isRequired,
  loadCastFilm: PropTypes.func.isRequired,
}.isRequired;
