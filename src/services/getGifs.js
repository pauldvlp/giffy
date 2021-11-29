import { API_KEY, API_URL } from './config';

const getGifs = ({ limit = 10, keyword = 'morty', page = 0, rating } = {}) => {
  const API = `${API_URL}/gifs/search?q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=es&api_key=${API_KEY}`;

  return fetch(API).then((res) => res.json());
};

export default getGifs;
