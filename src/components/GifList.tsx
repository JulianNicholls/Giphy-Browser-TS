import DeferredImage from './DeferredImage';

const GifList = (props: IGifList): JSX.Element => (
  <div className="gif-list">
    {props.gifs.map((gif) => (
      <a
        className="gif-link"
        href={gif.images.original.url}
        key={gif.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        <DeferredImage image={gif} />
      </a>
    ))}
  </div>
);

export default GifList;
