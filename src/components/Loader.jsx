import './Loader.css';

const Loader = ({ className }) => {
  return (
    <div className={`loader ${className}`}>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
    </div>
  );
};

export default Loader;
