import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loader from 'shared/Loader/Loader';
import Section from 'components/Section/Section';
import SearchForm from 'components/SearchForm/SearchForm';
import Button from 'shared/Button/Button';
import { getMovieByName } from 'shared/services/movies-api';
import HomeMoviesList from 'components/HomeMoviesList/HomeMoviesList';

import { MoviesBox } from './movie-page.styled';

import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [loadMoreButton, setLoadMoreButton] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovieByName(query, page);
        if (page === 1) {
          setNoResults(false);
          setMovies([...results]);
        } else {
          setMovies(prevState => [...prevState, ...results]);
        }

        if (results.length === 20) {
          setLoadMoreButton(true);
        } else setLoadMoreButton(false);

        if (!results.length) {
          setMovies([]);
          setNoResults(true);
          setIsLoading(false);
          return toast.warn(
            `No movies for ${query}. Please try something else`
          );
        }
      } catch (response) {
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesByQuery();
  }, [page, query, noResults]);

  const handleFormSubmit = value => {
    setSearchParams({ query: value });
    setMovies([]);
    setPage(1);
  };

  const loadMore = () => {
    setLoadMoreButton(false);
    setPage(page => page + 1);
  };

  return (
    <Section>
      <MoviesBox>
        <SearchForm handleFormSubmit={handleFormSubmit} />
        {isLoading && <Loader />}
        {error && <p>Oops. Something goes wrong. Please try again.</p>}
        {!noResults && <HomeMoviesList movies={movies} />}

        {loadMoreButton && (
          <Button onClick={loadMore} type="button">
            loadMore
          </Button>
        )}
      </MoviesBox>
    </Section>
  );
};

export default MoviesPage;
