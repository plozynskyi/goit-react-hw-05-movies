import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
import Loader from 'components/Loader/Loader';

import { getMovieById } from 'shared/services/movies-api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieById(movieId);
        console.log(response);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      {Boolean(isLoading) && <Loader />}
      <h1>Movies Page!!!</h1>
      <button>Go back</button>
      <SingleMoviePage movie={movie} />
    </>
  );
};

export default MovieDetails;
