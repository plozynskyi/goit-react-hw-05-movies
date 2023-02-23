import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'shared/Loader/Loader';
import { getMovieByNameCast } from 'shared/services/movies-api';

const SingleMovieCastPage = () => {
  const [castMovie, setCastMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await getMovieByNameCast(movieId);
        console.log(cast);
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

  const elements = castMovie.map(({ cast_id, name, profile_path }) => (
    <li key={cast_id}>
      <p>Name: {name}.</p>
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        alt={name}
        width="100px"
      />
    </li>
  ));

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops. Something goes wrong. Please try again.</p>}
      {noResults && <p>There is no information about cast for this movie.</p>}
      {!noResults && <ul>{elements}</ul>}
    </>
  );
};

export default SingleMovieCastPage;
