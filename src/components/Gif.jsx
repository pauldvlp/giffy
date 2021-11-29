import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import useNearScreen from '../hooks/useNearScreen';
import './Gif.css';

const Gif = ({ id, title, mp4 }) => {
  const { isNearScreen, fromRef } = useNearScreen({ justOne: false });

  useEffect(() => {
    isNearScreen ? fromRef.current.play() : fromRef.current.pause();
  }, [isNearScreen, fromRef]);
  return (
    <Link to={`/details/${id}`} className='gif' loop>
      <video ref={fromRef} src={mp4} loop></video>
      <h3>{title}</h3>
    </Link>
  );
};

export default Gif;
