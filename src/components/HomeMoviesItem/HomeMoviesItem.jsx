import { MoviesItem, MovieLinkById } from './home-movie-item.styled';

const HomeMoviesItem = ({ or }) => {
  return (
    <>
      <MoviesItem>
        <MovieLinkById>{or}</MovieLinkById>
      </MoviesItem>
    </>
  );
};

export default HomeMoviesItem;
