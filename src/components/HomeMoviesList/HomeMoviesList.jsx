import PropTypes from 'prop-types';

import HomeMoviesItem from 'components/HomeMoviesItem/HomeMoviesItem';

import { HomeMovies } from './home-movies.styled';

const HomeMoviesList = ({ movies }) => {
  return (
    <HomeMovies>
      {movies.map(({ id, title, name, poster_path }) => (
        <HomeMoviesItem
          key={id}
          title={title}
          name={name}
          id={id}
          poster={poster_path}
        />
      ))}
    </HomeMovies>
  );
};

export default HomeMoviesList;

HomeMoviesList.defaultProps = {
  movies: [],
};

HomeMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ),
};
