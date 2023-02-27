import PropTypes from 'prop-types';

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
  const imageUrl = 'https://image.tmdb.org/t/p/original/';
  const defaultPoster =
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg';
  return (
    <>
      <MoviesItem>
        <MovieLink to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
          <MoviePoster
            src={poster ? `${imageUrl}${poster}` : defaultPoster}
            alt={title || name}
          />
          <MovieTitle>{title || name}</MovieTitle>
        </MovieLink>
      </MoviesItem>
    </>
  );
};

export default HomeMoviesItem;

HomeMoviesItem.defaultProps = {};

HomeMoviesItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
};
