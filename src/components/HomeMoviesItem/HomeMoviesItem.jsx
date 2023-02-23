import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routes';
import { MoviesItem } from './home-movie-item.styled';

const HomeMoviesItem = ({ title, name, id }) => {
  const location = useLocation();

  const currentPage =
    location.pathname === routes.HOME ? routes.MOVIES : location.pathname;
  return (
    <>
      <MoviesItem>
        <Link to={`${currentPage}/${id}`} state={{ from: location }}>
          {title || name}
        </Link>
      </MoviesItem>
    </>
  );
};

export default HomeMoviesItem;
