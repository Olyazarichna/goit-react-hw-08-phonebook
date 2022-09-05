import notFound from '../../imagesbackground/notFound.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
export const NotFound = () => {
  return (
    <>
      <Container fluid="md" className=" p-0">
        <Card className="text-center">
          <p className="m-2 position-absolute fs-1 text-danger">
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
