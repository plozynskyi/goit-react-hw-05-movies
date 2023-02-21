import { useState } from 'react';

import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {Boolean(isLoading) && <Loader />}
      <h1>Movies Page!!!</h1>
    </>
  );
};

export default MoviesPage;
