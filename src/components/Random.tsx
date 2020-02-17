import React, { useState, useRef, useEffect } from 'react';

import { API_KEY, BASE_URL } from '../api';
import { IGif } from './GifList';

const Random = (): JSX.Element => {
  const [gif, setGif] = useState<IGif>();
  const handle = useRef<NodeJS.Timeout | null>(null);

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

      setGif(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  const slideshow = () => {
    loadRandom();

    handle.current = setInterval(loadRandom, 5000);
  };

  return (
    <div className="random">
      {gif ? (
        <>
          <div className="gif-holder">
            <img src={gif.images.original.url} alt={gif.title} />
          </div>
          <div className="button-holder">
            <button disabled={handle.current !== null} onClick={loadRandom}>
              Another!
            </button>
            <button disabled={handle.current !== null} onClick={slideshow}>
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
