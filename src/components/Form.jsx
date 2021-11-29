import useForm from '../hooks/useForm';
import { useLocation } from 'wouter';
import { BiCaretDown } from 'react-icons/bi';
import './Form.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

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
    <form className='gifs-form' onSubmit={handleSubmit}>
      <div className='rating'>
        {rating} <BiCaretDown />
        <div className='rating-wrapper'>
          {RATINGS.map((rating) => (
            <span
              className='rating-option'
              key={rating}
              data-value={rating}
              onClick={handleClick}>
              {rating}
            </span>
          ))}
        </div>
      </div>
      <input
        type='text'
        value={keyword}
        onChange={handleChange}
        placeholder='Busca un GIF aqui'
      />
    </form>
  );
};

export default Form;
