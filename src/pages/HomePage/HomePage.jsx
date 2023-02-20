import { useState, useEffect } from 'react';

import Loader from 'components/Loader/Loader';
import HomeMoviesList from 'components/HomeMoviesList/HomeMoviesList';

import { getTrendingMovies } from 'shared/services/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        console.log(results);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
    console.log(movies);
  }, []);

  return (
    <>
      {Boolean(isLoading) && <Loader />}
      <HomeMoviesList movies={movies} />
    </>
  );
};

export default HomePage;
