import React from 'react';
import PropTypes from 'prop-types';

import DeferredImage from './DeferredImage';

function GifList({ gifs }) {
  return (
    <div className="gif-list">
      {gifs.map(image => (
        <a
          className="gif-link"
          href={image.images.original.url}
          key={image.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DeferredImage image={image} />
        </a>
      ))}
    </div>
  );
}

GifList.propTypes = {
  gifs: PropTypes.array.isRequired,
};

export default GifList;
