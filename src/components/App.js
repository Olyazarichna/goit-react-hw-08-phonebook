import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useGetCurrentUserQuery } from 'services/authApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import Container from 'react-bootstrap/Container';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const LoginView = lazy(() => import('components/LoginView/LoginView'));
const SignupView = lazy(() => import('components/SignupView/SignupView'));
const Contacts = lazy(() => import('components/Contacts/Contacts'));
export const App = () => {
  const { token } = useSelector(state => state.auth);

  useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <AppBar />
      <Container fluid="md">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={token ? <Contacts />:<LoginView />} />
            <Route path="/register" element={token ? <Contacts />: <SignupView />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={2000} />
      </Container>
    </>
  );
};
