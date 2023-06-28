import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { BoxMove, LinkWrap, MoveName } from '../MoviesList/MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <BoxMove>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <LinkWrap to={`/movies/${id}`} state={{ from: location }}>
            <MoveName>{title}</MoveName>
          </LinkWrap>
        </li>
      ))}
    </BoxMove>
  );
};

export default MoviesList;

PropTypes.MoviesList = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
