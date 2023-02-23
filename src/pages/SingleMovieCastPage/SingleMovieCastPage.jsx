import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'shared/Loader/Loader';
import { getMovieByNameCast } from 'shared/services/movies-api';
import CastList from '../../components/CastList/CastList';

const SingleMovieCastPage = () => {
  const [castMovie, setCastMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await getMovieByNameCast(movieId);
        if (!cast.length) {
          setNoResults(true);
        }
        setCastMovie(cast);
      } catch ({ response }) {
        setError(response.data.message);
        console.log(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops. Something goes wrong. Please try again.</p>}
      {noResults && <p>There is no information about cast for this movie.</p>}

      {!noResults && <CastList castMovie={castMovie} />}
    </>
  );
};

export default SingleMovieCastPage;
