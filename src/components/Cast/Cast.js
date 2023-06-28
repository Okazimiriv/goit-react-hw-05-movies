import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import { ErrorMessage } from 'ErorrMessage';
import { getMovieCastById } from 'service/apiService';
import avatar from './defavatar.png';
import {
  CastCardWrap,
  CastItem,
  CastImg,
  NameActor,
  Content,
  CharacterText,
} from './Cast.styled';

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
      .then(resp => {
        if (resp.cast.length === 0) setError('No cast found...');
        setCastList(resp.cast);
      })
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
      <CastCardWrap>
        {castList.length > 0 &&
          castList.map(({ id, name, character, profile_path }) => {
            return (
              <CastItem key={id}>
                <Content>
                  <CastImg
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                        : avatar
                    }
                    alt={`${name} portrait`}
                    width="100px"
                    loading="lazy"
                  />
                </Content>
                <NameActor>{name}</NameActor>
                <CharacterText>{`Character: ${character}`}</CharacterText>
              </CastItem>
            );
          })}
      </CastCardWrap>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </section>
  );
};

export default Cast;

Cast.propTypes = {
  id: PropTypes.number.isRequired,
  castList: PropTypes.array.isRequired,
  getMovieCastById: PropTypes.func.isRequired,
}.isRequired;
