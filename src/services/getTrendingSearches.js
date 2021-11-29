import { API_KEY, API_URL } from './config';

const getTrendingSearches = () => {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(url).then((res) => res.json());
};

export default getTrendingSearches;
