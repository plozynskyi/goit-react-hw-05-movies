import PropTypes from 'prop-types';

import {
  Wrapper,
  MovieInfoBox,
  MovieTitle,
  MoviePoster,
  MovieInfo,
} from './movie-details.styled';

const SingleMoviePage = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    homepage,
    status,
  } = movie;

  let genresList = '';

  if (Object.keys(movie).length) {
    genresList = genres.map(({ name }, genre) => {
      if (genre === genres.length - 1) {
        return `${name}.`;
      }
      return `${name}, `;
    });
  }

  return (
    <Wrapper>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={original_title}
      />
      <MovieInfoBox>
        <MovieTitle href={homepage} target="_blank" rel="noopener noreferrer">
          {original_title}
        </MovieTitle>
        <p>
          <MovieInfo>User Score - </MovieInfo>
          {Number(vote_average).toFixed(2)} %
        </p>
        <p>
          <MovieInfo>Overview:</MovieInfo> {overview}
        </p>
        <p>
          <MovieInfo>Genres:</MovieInfo> {genresList}
        </p>
        <p>
          <MovieInfo>Status:</MovieInfo> {status}
        </p>
        <p>
          <MovieInfo>Release date:</MovieInfo> {release_date}
        </p>
      </MovieInfoBox>
    </Wrapper>
  );
};

export default SingleMoviePage;

SingleMoviePage.defaultProps = {
  movies: [],
};

SingleMoviePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      homepage: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};
