import { useLocation } from 'react-router-dom';
import { routes } from '../../routes';
import {
  MovieLink,
  MoviesItem,
  MoviePoster,
  MovieTitle,
} from './home-movie-item.styled';

const HomeMoviesItem = ({ title, name, id, poster }) => {
  const location = useLocation();
  const currentPage =
    location.pathname === routes.HOME ? routes.MOVIES : location.pathname;
  const imageUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <>
      <MoviesItem>
        <MovieLink to={`${currentPage}/${id}`} state={{ from: location }}>
          <MoviePoster src={`${imageUrl}${poster}`} alt="" />
          <MovieTitle>{title || name}</MovieTitle>
        </MovieLink>
      </MoviesItem>
    </>
  );
};

export default HomeMoviesItem;
