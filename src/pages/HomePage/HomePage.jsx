import { useState, useEffect } from 'react';

import Section from 'components/Section/Section';
import Loader from 'shared/Loader/Loader';
import HomeMoviesList from 'components/HomeMoviesList/HomeMoviesList';
import Button from 'shared/Button/Button';

import { getTrendingMovies } from 'shared/services/movies-api';
import { TrendsMoviesBox } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [loadMoreButton, setLoadMoreButton] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies(page);
        setLoadMoreButton(true);

        if (page === 1) {
          return setMovies([...results]);
        }
        setMovies(prevState => [...prevState, ...results]);

        if (!results) {
          setNoResults(true);
        }
      } catch ({ response }) {
        setError(response.data.message);
        console.log(response.data.message);
        setLoadMoreButton(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [page]);

  const loadMore = () => {
    setLoadMoreButton(false);
    setPage(page => page + 1);
  };

  return (
    <Section>
      <TrendsMoviesBox>
        {isLoading && <Loader />}
        {error && <p>Oops. Something goes wrong. Please try refresh page.</p>}
        {noResults && (
          <p>
            There is no information about trending movie. Please try refresh
            page.
          </p>
        )}
        {!noResults && <HomeMoviesList movies={movies} />}
        {loadMoreButton && (
          <Button onClick={loadMore} type="button">
            loadMore
          </Button>
        )}
      </TrendsMoviesBox>
    </Section>
  );
};

export default HomePage;
