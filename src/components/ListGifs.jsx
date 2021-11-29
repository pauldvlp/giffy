import Gif from './Gif';
import Message from './Message';

const ListGifs = ({ gifs }) => {
  return !gifs.length ? (
    <Message msg='No existe gifs con ese termino' />
  ) : (
    <div className='gifs-container'>
      {gifs.map((gif) => {
        const { id, images, title } = gif;
        const { url } = images.original;
        return <Gif key={id} {...{ id, title, url }} />;
      })}
    </div>
  );
};

export default ListGifs;
