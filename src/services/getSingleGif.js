import { API_KEY, API_URL } from './config';

const getSingleGif = ({ id }) => {
  const url = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
};

export default getSingleGif;
