import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'shared/Loader/Loader';
import { getMovieByNameReviews } from 'shared/services/movies-api';

const SingleMovieReviewPage = () => {
  const [reviewMovie, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovieByNameReviews(movieId);
        if (!results.length) {
          setNoResults(true);
        }
        setReview(results);
      } catch ({ response }) {
        setError(response.data.message);
        console.log(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);
  const elements = reviewMovie.map(({ id, author, content }) => (
    <li key={id}>
      <h1>{author}</h1>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops. Something goes wrong. Please try again.</p>}
      {noResults && <p>There is no information about review for this movie.</p>}
      {!noResults && <ul>{elements}</ul>}
    </>
  );
};

export default SingleMovieReviewPage;
