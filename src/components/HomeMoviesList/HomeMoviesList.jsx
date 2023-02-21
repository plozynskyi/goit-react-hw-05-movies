// import PropTypes from 'prop-types';

import HomeMoviesItem from 'components/HomeMoviesItem/HomeMoviesItem';

import { HomeMovies } from './home-movies.styled';

const HomeMoviesList = ({ movies }) => {
  return (
    <HomeMovies>
      {movies.map(({ id, title, name }) => (
        <HomeMoviesItem key={id} title={title} name={name} id={id} />
      ))}
    </HomeMovies>
  );
};

export default HomeMoviesList;

HomeMoviesList.defaultProps = {
  movies: [],
};

HomeMoviesList.propTypes = {};
