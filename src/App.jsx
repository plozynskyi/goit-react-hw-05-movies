import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<Navigate to={HomePage} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
