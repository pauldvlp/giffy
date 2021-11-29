import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword, rating } = { keyword: null }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, rating, page }).then(({ data }) => {
      setGifs(data);
      setLoading(false);
      localStorage.setItem('lastKeyword', keywordToUse);
    });
  }, [keyword, keywordToUse, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getGifs({ keyword: keywordToUse, page }).then(({ data }) => {
      setGifs((prevGifs) => [...prevGifs, ...data]);
    });
  }, [page]);

  return {
    gifs,
    loading,
    setPage,
  };
};

export default useGifs;
