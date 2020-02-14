import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InView } from 'react-intersection-observer';

function DeferredImage({ image }) {
  const [loaded, setLoaded] = useState(false);

  const setSpan = (inView, entry) => {
    entry.target.addEventListener('load', () => {
      const img = entry.target;
      const height = img.clientHeight;
      const span = Math.ceil(height / 10 + 1);

      img.parentNode.style.gridRowEnd = `span ${span}`;
    });
  };

  return (
    <InView onChange={setSpan}>
      {({ inView, ref }) => {
        if (loaded || inView) {
          setLoaded(true);

          return (
            <img ref={ref} src={image.images.fixed_width.url} alt={image.title} />
          );
        }

        return <div className="lazy" ref={ref} alt="" />;
      }}
    </InView>
  );
}

DeferredImage.propTypes = {
  image: PropTypes.object.isRequired,
};

export default DeferredImage;
