import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListGifs from '../components/ListGifs';
import Loader from '../components/Loader';
import useGifs from '../hooks/useGifs';
import useNearScreen from '../hooks/useNearScreen';
import './SearchResults.css';

const SearchResults = ({ params }) => {
  const { keyword, rating = 'g' } = params;
  const { gifs, loading, setPage } = useGifs({ keyword, rating });
  const { isNearScreen, fromRef, setIsNearScreen } = useNearScreen({
    justOne: false,
  });

  useEffect(() => {
    if (isNearScreen) {
      setPage((prevPage) => prevPage + 1);
      setIsNearScreen(false);
    }
  });
  return (
    <>
      <Helmet>
        <title>
          {`${gifs.length}`} resultados de {`${decodeURI(keyword)}`}
        </title>
      </Helmet>
      {loading ? <Loader /> : <ListGifs {...{ gifs }} />}
      <div ref={fromRef}></div>
    </>
  );
};

export default SearchResults;
