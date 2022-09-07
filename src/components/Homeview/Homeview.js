import img from '../../imagesbackground/background.jpg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import {Contacts} from 'components/Contacts/Contacts';

export const HomeView = () => {
  const user = useSelector(state => state.auth);
  // console.log('user',user);
  return (
    <Container fluid="md" className=' p-0'>
      {user.token ? <Contacts/> : <><Card className="text-center">
        <p className='m-2 position-absolute top-50 start-0 fs-1 text-warning'>
          For more information you should
          <Link to="/login"> log in </Link>
          if you have account, or <Link to="/register"> sign up</Link>
        </p>
        <img src={img} min-width="800" alt="phone" />
      </Card></>}
     
    </Container>
  );
};

export default HomeView;
