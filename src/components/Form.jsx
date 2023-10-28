import { BiCaretDown } from "react-icons/bi";
import { Link, useLocation } from "wouter";
import useForm from "../hooks/useForm";
import "./Form.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const Form = () => {
  const [_, setPath] = useLocation();
  const { keyword, rating, updateKeyword, updateRating } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) setPath(`/search/${keyword}/${rating}`);
  };

  const handleChange = (e) => updateKeyword(e.target.value);

  const handleClick = (e) => updateRating(e.target.dataset.value);

  return (
    <form className="gifs-form" onSubmit={handleSubmit}>
      <h1 className="logo">
        <Link to="/">
          <span>G</span>
          <span>I</span>
          <span>F</span>
          <span>F</span>
          <span>Y</span>
        </Link>
      </h1>
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Busca un GIF aquí"
      />
      <div className="rating">
        {rating} <BiCaretDown />
        <div className="rating-wrapper">
          {RATINGS.map((rating) => (
            <span
              className="rating-option"
              key={rating}
              data-value={rating}
              onClick={handleClick}
            >
              {rating}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Form;
