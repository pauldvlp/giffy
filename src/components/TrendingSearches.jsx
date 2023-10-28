import { useEffect, useState } from "react";
import { Link } from "wouter";
import getTrendingSearches from "../services/getTrendingSearches";

const TrendingSearches = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrendingSearches().then((res) => {
      setTrendings(res.data);
    });
  }, []);

  return (
    <article className="trendings">
      {trendings.map((trend) => (
        <Link className="trend" key={trend} to={`/search/${trend}`}>
          {trend}
        </Link>
      ))}
    </article>
  );
};

export default TrendingSearches;
