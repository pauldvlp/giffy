import { useEffect, useState } from 'react';
import getSingleGif from '../services/getSingleGif';

const useSingleGif = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [gif, setGif] = useState({});

  useEffect(() => {
    setLoading(true);
    getSingleGif({ id })
      .then(({ data }) => {
        const { images } = data;
        setGif({
          url: images.original.url || images.downsized_large.url,
          title: data.title,
        });
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    error,
    gif,
    loading,
  };
};

export default useSingleGif;
