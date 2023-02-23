import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from 'shared/Loader/Loader';
import Section from 'components/Section/Section';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovieByName } from 'shared/services/movies-api';
import HomeMoviesList from 'components/HomeMoviesList/HomeMoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovieByName(query);
        if (!results.length) {
          setNoResults(true);
        }
        setMovies(results);
      } catch (response) {
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesByQuery();
  }, [query]);

  const handleFormSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <Section>
        <SearchForm handleFormSubmit={handleFormSubmit} />
        {isLoading && <Loader />}
        {error && <p>Oops. Something goes wrong. Please try again.</p>}
        {!movies && <p>There is no Results. Please check query parameters. </p>}
        {!noResults && <HomeMoviesList movies={movies} />}
      </Section>
    </>
  );
};

export default MoviesPage;
