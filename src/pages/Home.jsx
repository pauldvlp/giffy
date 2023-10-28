import { Helmet } from 'react-helmet';
import LazyTrendingSearches from '../components/LazyTrendingSearches';
import ListGifs from '../components/ListGifs';
import Loader from '../components/Loader';
import useGifs from '../hooks/useGifs';
import './Home.css';

const Home = () => {
  const { gifs, loading } = useGifs();
  return (
    <>
      <Helmet>
        <title>Inicio | Giffy</title>
      </Helmet>
      <h2>Ultima búsqueda</h2>
      <article className='home'>
        {loading ? <Loader /> : <ListGifs {...{ gifs }} />}
        <div>
          <h2>Busquedas en tendencia</h2>
          <LazyTrendingSearches />
        </div>
      </article>
    </>
  );
};

export default Home;
