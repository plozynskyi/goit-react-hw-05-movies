import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navbar from './components/Navbar/Navbar';

import { routes } from 'routes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('pages/SingleMoviePage/SingleMoviePage')
);
const SingleMovieCastPage = lazy(() =>
  import('pages/SingleMovieCastPage/SingleMovieCastPage')
);
const SingleMovieReviewPage = lazy(() =>
  import('pages/SingleMovieReviewPage/SingleMovieReviewPage')
);

export const App = () => {
  const { HOME, MOVIES, MOVIESDETAILS, CAST, REVIEWS } = routes;
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense>
        <Routes>
          <Route index path={HOME} element={<HomePage />} />
          <Route path={MOVIES} element={<MoviesPage />} />
          <Route path={MOVIESDETAILS} element={<MovieDetails />}>
            <Route path={CAST} element={<SingleMovieCastPage />} />
            <Route path={REVIEWS} element={<SingleMovieReviewPage />} />
          </Route>
          <Route path="*" element={<Navigate to={HomePage} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
