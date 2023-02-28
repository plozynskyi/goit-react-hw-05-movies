import PropTypes from 'prop-types';

import {
  Wrapper,
  MovieInfoBox,
  MovieTitle,
  MoviePoster,
  MovieInfoText,
  MovieInfo,
} from './movie-details.styled';

const MovieDetails = ({ movie }) => {
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
        <MovieInfoText>
          <MovieInfo>User Score - </MovieInfo>
          {Number(vote_average).toFixed(2)} %
        </MovieInfoText>
        <MovieInfoText>
          <MovieInfo>Overview:</MovieInfo> {overview}
        </MovieInfoText>
        <MovieInfoText>
          <MovieInfo>Genres:</MovieInfo> {genresList}
        </MovieInfoText>
        <MovieInfoText>
          <MovieInfo>Status:</MovieInfo> {status}
        </MovieInfoText>
        <MovieInfoText>
          <MovieInfo>Release date:</MovieInfo> {release_date}
        </MovieInfoText>
      </MovieInfoBox>
    </Wrapper>
  );
};

export default MovieDetails;

MovieDetails.defaultProps = {
  movies: [],
};

MovieDetails.propTypes = {
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
