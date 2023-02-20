// import PropTypes from 'prop-types';

import HomeMoviesItem from 'components/HomeMoviesItem/HomeMoviesItem';

import { HomeMovies } from './home-movies.styled';

const HomeMoviesList = ({ movies }) => {
  return (
    <HomeMovies>
      {movies.map(({ id, title }) => (
        <HomeMoviesItem key={id} or={title} />
      ))}
    </HomeMovies>
  );
};

export default HomeMoviesList;

HomeMoviesList.defaultProps = {
  movies: [],
};

HomeMoviesList.propTypes = {};
