import { Wrapper, MovieTitle, MoviePoster } from './single-movie-page.styled';

const SingleMoviePage = ({ movie }) => {
  return (
    <Wrapper>
      <MovieTitle>{movie.title}</MovieTitle>
      <p>User Score - {movie.vote_average} %</p>
      <p>Overview {movie.overview}</p>
      <p>Genres {}</p>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
    </Wrapper>
  );
};

export default SingleMoviePage;
