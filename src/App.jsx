import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

import { routes } from 'routes';

export const App = () => {
  const { HOME, MOVIES, MOVIESDETAILS, CAST, REVIEWS } = routes;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route index path={HOME} element={<HomePage />} />
          <Route path={MOVIES} element={<MoviesPage />} />
          <Route path={MOVIESDETAILS} element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<Navigate to={HomePage} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
