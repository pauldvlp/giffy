import { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const Rating = () => {
  const [rating, setRating] = useState('g');
  const handleClick = (e) => {
    const { value } = e.target.dataset;
    setRating(value);
  };

  return (
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
  );
};

export default Rating;
