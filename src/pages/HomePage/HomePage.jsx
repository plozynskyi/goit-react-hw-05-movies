import { useState, useEffect } from 'react';

import Loader from 'shared/Loader/Loader';
import HomeMoviesList from 'components/HomeMoviesList/HomeMoviesList';

import { getTrendingMovies } from 'shared/services/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        if (!results) {
          setNoResults(true);
        }
        setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        console.log(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops. Something goes wrong. Please try refresh page.</p>}
      {noResults && (
        <p>
          There is no information about trending movie. Please try refresh page.
        </p>
      )}
      {!noResults && <HomeMoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
