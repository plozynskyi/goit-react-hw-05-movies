import { Navigate, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

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

const UserRoutes = () => {
  const { HOME, MOVIES, MOVIESDETAILS, CAST, REVIEWS } = routes;

  return (
    <Suspense fallback={<p>...loading</p>}>
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
  );
};

export default UserRoutes;
