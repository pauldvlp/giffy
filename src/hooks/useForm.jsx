import { useReducer } from 'react';
import formReducer, { types } from '../reducer/form.reducer';

const useForm = ({ initialKeyword = 'random', initialRating = 'g' } = {}) => {
  const [formState, dispatch] = useReducer(formReducer, {
    keyword: decodeURI(initialKeyword),
    rating: initialRating,
  });

  const { keyword, rating } = formState;

  const updateKeyword = (keyword) => {
    dispatch({ type: types.update_keyword, payload: keyword });
  };

  const updateRating = (rating) => {
    dispatch({ type: types.update_rating, payload: rating });
  };

  return {
    keyword,
    rating,
    updateKeyword,
    updateRating,
  };
};

export default useForm;
