import css from 'components/Homeview/Homeview.module.css';
import img from '../../imagesbackground/background.jpg';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
export const HomeView = () => {
  return (
    <div className={css.wrapper}>
      <Card className="text-center">
        <p className={css.text}>
          For more information you should
          <Link to="/login"> log in </Link>
          if you have account, or <Link to="/register"> sign up</Link>
        </p>
        <img src={img} width="1000" alt="phone" />
      </Card>
    </div>
  );
};

export default HomeView;
