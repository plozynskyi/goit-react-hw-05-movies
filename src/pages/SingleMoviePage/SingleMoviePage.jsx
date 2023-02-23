import { useState, useEffect, useCallback } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import SingleMoviePage from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';

import { getMovieById } from 'shared/services/movies-api';
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

  const goBack = useCallback(() => navigate(from), [from, navigate]);

  return (
    <>
      <Section>
        {Boolean(isLoading) && <Loader />}
        <Button onClick={goBack} type="button">
          Go back
        </Button>
        {error && <p>Oops. Something goes wrong. Please try again.</p>}
        {noResults && <p>There is no information. Please try again.</p>}
        <SingleMoviePage movie={movie} />
        <ul>
          <li>
            <Link to="Cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="Reviews" state={{ from }}>
              REVIEWS
            </Link>
          </li>
        </ul>

        <Outlet />
      </Section>
    </>
  );
};

export default MovieDetails;
