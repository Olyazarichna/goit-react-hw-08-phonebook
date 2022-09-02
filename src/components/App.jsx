import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppBar } from './AppBar/AppBar';
import { NotFound } from './pages/NotFound';
import { LogInView } from 'views/LogInView';
import { SignUpView } from 'views/SignUpView';
import { Contacts } from 'components/Contacts/Contacts';
import { useGetCurrentUserQuery } from 'services/authApi';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  const { isError } = useGetCurrentUserQuery();

  // console.log('current', data);
  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInView />} />
        <Route path="/register" element={<SignUpView />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
