import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppBar } from './AppBar/AppBar';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginView } from 'components/LoginView/LoginView';
import { SignupView } from 'components/SignupView/SignupView';
import { Contacts } from 'components/Contacts/Contacts';
import { useGetCurrentUserQuery } from 'services/authApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const { token } = useSelector(state => state.auth);
  console.log('token', token);
  useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  // console.log('current', data);
  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<SignupView />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
