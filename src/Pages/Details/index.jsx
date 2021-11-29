import { Helmet } from 'react-helmet';
import { Redirect } from 'wouter';
import Loader from '../../components/Loader';
import useSingleGif from '../../hooks/useSingleGif';

const Details = ({ params }) => {
  const { id } = params;
  const { error, gif, loading } = useSingleGif({ id });

  if (error) return <Redirect to='/' />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>Gif : {`${gif.title}`}</title>
          </Helmet>
          <h2 className='title_preview'>{gif.title}</h2>
          <figure className='gif_preview'>
            <img src={gif.url} />
          </figure>
        </>
      )}
    </>
  );
};

export default Details;
