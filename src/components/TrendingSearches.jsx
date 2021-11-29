import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import getTrendingSearches from '../services/getTrendingSearches';

const TrendingSearches = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrendingSearches().then((res) => {
      setTrendings(res.data);
    });
  }, []);

  return trendings.map((trend) => (
    <Link className='trend' key={trend} to={`/search/${trend}`}>
      {trend}
    </Link>
  ));
};

export default TrendingSearches;
