import { Helmet } from "react-helmet";
import { Redirect } from "wouter";
import Loader from "../components/Loader";
import useSingleGif from "../hooks/useSingleGif";

const Details = ({ params }) => {
  const { id } = params;
  const { error, gif, loading } = useSingleGif({ id });

  if (error) return <Redirect to="/" />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>Gif : {`${gif.title}`}</title>
          </Helmet>
          <figure className="gif_preview">
            <img src={gif.url} />
            <figcaption className="title_preview">{gif.title}</figcaption>
          </figure>
        </>
      )}
    </>
  );
};

export default Details;
