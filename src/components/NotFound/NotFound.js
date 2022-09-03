import notFound from '../../imagesbackground/notFound.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import css from './NotFound.module.css';
import Card from 'react-bootstrap/Card';
export const NotFound = () => {
  return (
    <>
      <Container fluid="md">
        <Card className="text-center">
          <p className={css.text}>
            Page not found,
            <Link to="/"> homepage </Link>
          </p>
          <img src={notFound} width="900" alt="not found" />
        </Card>
      </Container>
    </>
  );
};

export default NotFound;