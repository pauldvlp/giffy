import { useState } from "react";
import { Link } from "wouter";
import "./Gif.css";
import Loader from "./Loader";

const Gif = ({ id, title, url }) => {
  const [load, setLoad] = useState(false)

  const handleLoad = (event) => {
    setLoad(true)
    event.target.style.display = 'block'
  }

  return (
    <Link to={`/details/${id}`} className="gif">
      {!load && <Loader className='gif-loader' />}
      <img
        onLoad={handleLoad}
        src={url}
        alt={title}
      ></img>
      {title && <h3>{title}</h3>}
    </Link>
  );
};

export default Gif;
