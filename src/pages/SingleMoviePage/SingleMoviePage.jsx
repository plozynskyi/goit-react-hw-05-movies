import { useState, useEffect, useCallback } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import {
  SingleMovieBox,
  LinkList,
  LinkListItem,
  LinkElem,
} from './single-movie-page.styled';
import Loader from 'shared/Loader/Loader';

// import { routes } from 'routes';

import { getMovieById } from 'shared/services/movies-api';
import Section from 'components/Section/Section';
import Button from 'shared/Button/Button';

const SingleMoviePage = () => {
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
    <Section>
      <SingleMovieBox>
        {Boolean(isLoading) && <Loader />}
        <Button onClick={goBack} type="button">
          Go back
        </Button>
        {error && <p>Oops. Something goes wrong. Please try again.</p>}
        {!noResults && <p>There is no information. Please try again.</p>}
        <MovieDetails movie={movie} />
        <LinkList>
          <LinkListItem>
            {/* <LinkElem to={routes.CAST} state={{ from }}> */}
            <LinkElem to={`/movies/${movieId}/cast`} state={{ from }}>
              Cast
            </LinkElem>
          </LinkListItem>
          <LinkListItem>
            {/* <LinkElem to={routes.REVIEWS} state={{ from }}> */}
            <LinkElem to={`/movies/${movieId}/reviews`} state={{ from }}>
              Reviews
            </LinkElem>
          </LinkListItem>
        </LinkList>
        <Outlet />
      </SingleMovieBox>
    </Section>
  );
};

export default SingleMoviePage;
