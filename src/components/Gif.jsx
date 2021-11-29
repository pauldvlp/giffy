import { Link } from 'wouter';
import './Gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <Link to={`/details/${id}`} className='gif' loop>
      <img src={url}></img>
      <h3>{title}</h3>
    </Link>
  );
};

export default Gif;
