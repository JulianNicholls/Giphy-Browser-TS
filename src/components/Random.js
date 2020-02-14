import React, { useState, useRef, useEffect } from 'react';

import { API_KEY, BASE_URL } from '../api';

const Random = () => {
  const [gif, setGif] = useState({});
  const handle = useRef(0);

  useEffect(() => {
    loadRandom();

    return () => {
      if (handle.current) clearInterval(handle.current);
    };
  }, []);

  const loadRandom = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/random?api_key=${API_KEY}&rating=R`
      );
      const json = await response.json();

      console.log(json.data.image_height);

      setGif(json);
    } catch (err) {
      console.error(err);
    }
  };

  const slideshow = () => {
    loadRandom();

    handle.current = setInterval(loadRandom, 5000);
  };

  const image = gif.data;

  return (
    <div className="random">
      {image ? (
        <>
          <div className="gif-holder">
            <img src={image.images.original.url} alt={image.title} />
          </div>
          <div className="button-holder">
            <button disabled={handle.current !== 0} onClick={loadRandom}>
              Another!
            </button>
            <button disabled={handle.current !== 0} onClick={slideshow}>
              Slide show
            </button>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Random;
