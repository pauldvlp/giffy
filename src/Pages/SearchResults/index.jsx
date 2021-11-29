import React from 'react';
import { Helmet } from 'react-helmet';
import ListGifs from '../../components/ListGifs';
import Loader from '../../components/Loader';
import useGifs from '../../hooks/useGifs';
import './styles.css';

const SearchResults = ({ params }) => {
  const { keyword, rating = 'g' } = params;
  const { gifs, loading, setPage } = useGifs({ keyword, rating });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  return (
    <>
      <Helmet>
        <title>
          {`${gifs.length}`} resultados de {`${decodeURI(keyword)}`}
        </title>
      </Helmet>
      {loading ? <Loader /> : <ListGifs {...{ gifs }} />}
      {gifs.length ? (
        <button className='more' onClick={handleNextPage}>
          Mas ▼
        </button>
      ) : null}
    </>
  );
};

export default SearchResults;
