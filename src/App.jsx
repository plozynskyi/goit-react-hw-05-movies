import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from 'components/Navbar/Navbar';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
      <ToastContainer theme="light" autoClose={3000} />
    </BrowserRouter>
  );
};
