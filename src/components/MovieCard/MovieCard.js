// import PropTypes from 'prop-types';
import {
  MovieCardWrap,
  MovieImageWrap,
  MovieImage,
  MovieDescription,
} from './MovieCard.styled';

const MovieCard = ({
  title,
  overview,
  vote_average,
  genres = [],
  poster_path,
}) => {
  return (
    <MovieCardWrap>
      <MovieImageWrap>
        <MovieImage src={poster_path} alt={`${title} poster`} />
      </MovieImageWrap>
      <MovieDescription>
        <h2>{title}</h2>
        <p>{`User Score: ${vote_average}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres &&
            genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
        </ul>
      </MovieDescription>
    </MovieCardWrap>
  );
};
export default MovieCard;

// MovieCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   overview: PropTypes.string.isRequired,
//   vote_average: PropTypes.string.isRequired,
//   genres: PropTypes.string.isRequired,
//   poster_path: PropTypes.string.isRequired,
// };
