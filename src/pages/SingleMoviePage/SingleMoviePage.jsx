import { useState, useEffect, useCallback } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import SingleMoviePage from 'components/MovieDetails/MovieDetails';
import { SingleMovieBox } from './single-movie-page.styled';
import Loader from 'shared/Loader/Loader';

import { getMovieById, getMovieTrailerById } from 'shared/services/movies-api';
import Section from 'components/Section/Section';
import Button from 'shared/Button/Button';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieById(movieId);
        if (!response.length) {
          setNoResults(true);
        }
        setMovie(response);
      } catch (response) {
        setError(response.data.message);
        console.log(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const { results } = await getMovieTrailerById(movieId);
  //       console.log(results);
  //     } catch (response) {
  //       console.log(response.data.message);
  //     } finally {
  //     }
  //   };
  //   getMovie();
  // }, [movieId]);

  const goBack = useCallback(() => navigate(from), [from, navigate]);

  return (
    <Section>
      <SingleMovieBox>
        {Boolean(isLoading) && <Loader />}
        <Button onClick={goBack} type="button">
          Go back
        </Button>
        {error && <p>Oops. Something goes wrong. Please try again.</p>}
        {!noResults && <p>There is no information. Please try again.</p>}
        <SingleMoviePage movie={movie} />
        <ul>
          <li>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </SingleMovieBox>
    </Section>
  );
};

export default MovieDetails;
