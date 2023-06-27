import PropTypes from 'prop-types';

import {
  MovieCardWrap,
  MovieImage,
  MovieDescription,
  GenresBox,
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
      <MovieImage
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={`${title} poster`}
      />
      <MovieDescription>
        <h2>{title}</h2>
        <p>{`User Score: ${vote_average}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <GenresBox>
          {genres &&
            genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
        </GenresBox>
      </MovieDescription>
    </MovieCardWrap>
  );
};
export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};
