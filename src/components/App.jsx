import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppBar } from './AppBar/AppBar';
import { NotFound } from './pages/NotFound';
import { LogInView } from 'views/LogInView';
import { SignUpView } from 'views/SignInView';
export const App = () => {
  return (
    <div>
      <div>
        <AppBar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logIn" element={<LogInView />} />
        <Route path="/signUp" element={<SignUpView />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
