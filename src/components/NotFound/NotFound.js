import notFound from '../../imagesbackground/notFound.png';
import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <>
      <p>Page not found </p>
      <img src={notFound} width="900" alt="not found" />
      <Link to="/">Homepage</Link>
    </>
  );
};
