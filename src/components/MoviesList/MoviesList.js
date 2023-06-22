import PropTypes from 'prop-types';
import { BoxMove, LinkWrap, MoveName } from '../MoviesList/MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <BoxMove>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <LinkWrap to={`/movies/${id}`}>
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
