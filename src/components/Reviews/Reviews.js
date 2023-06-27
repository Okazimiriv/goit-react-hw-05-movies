import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import { ErrorMessage } from 'ErorrMessage';
import { getMovieReviewsById } from 'service/apiService';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getMovieReviewsById(id)
      .then(resp => {
        // console.log('reviews', resp);
        if (resp.results.length === 0) setError('No reviews found...');
        setReviewsList(resp.results);
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
      <ul>
        {reviewsList.length > 0 &&
          reviewsList.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{`Author: ${author}`}</h4>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </section>
  );
};

export default Reviews;

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  reviewsList: PropTypes.array.isRequired,
  getMovieReviewsById: PropTypes.func.isRequired,
}.isRequired;
