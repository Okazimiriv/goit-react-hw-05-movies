// import PropTypes from 'prop-types';
import {
  MovieCardWrap,
  MovieImageWrap,
  MovieImage,
  MovieDescription,
} from './MovieCard.styled';

const MovieCard = () => {
  return (
    <MovieCardWrap>
      <MovieImageWrap>
        <MovieImage src="https://via.placeholder.com/200x100" alt="" />
      </MovieImageWrap>
      <MovieDescription>
        <h2>film name</h2>
        <p>{`User Score: `}</p>
        <h3>Overview</h3>
        <p>text overview</p>
        <h4>Genres</h4>
        <p>film geners</p>
      </MovieDescription>
    </MovieCardWrap>
  );
};
export default MovieCard;
