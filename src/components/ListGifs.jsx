import Gif from './Gif';
import Message from './Message';

const ListGifs = ({ gifs }) => {
  return !gifs.length ? (
    <Message msg='No existe gifs con ese termino' />
  ) : (
    <div className='gifs-container'>
      {gifs.map((gif) => {
        const { id, images, title } = gif;
        const { mp4 } = images.original_mp4;
        return <Gif key={id} {...{ id, title, mp4 }} />;
      })}
    </div>
  );
};

export default ListGifs;
