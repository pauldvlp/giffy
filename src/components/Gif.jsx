import { useRef } from 'react';
import { Link } from 'wouter';
import './Gif.css';

const Gif = ({ id, title, mp4 }) => {
  const video = useRef();
  const handleOver = () => {
    video.current.play();
  };
  const handleOut = () => {
    video.current.pause();
  };
  return (
    <Link
      to={`/details/${id}`}
      className='gif'
      onMouseOver={handleOver}
      onMouseOut={handleOut}
      loop>
      <video ref={video} src={mp4}></video>
      <h3>{title}</h3>
    </Link>
  );
};

export default Gif;
