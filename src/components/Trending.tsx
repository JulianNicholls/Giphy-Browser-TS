import React, { useState, useEffect } from 'react';

import GifList, { IGifDataList } from './GifList';

import { API_KEY, BASE_URL } from '../api';

const Trending = (): JSX.Element => {
  const [gifs, setGifs] = useState<IGifDataList>({ data: null });

  // A useEffect() function cannot be an async function, so the async function
  // must be elsewhere and called with () => { ... }.
  useEffect(() => {
    const loadTrending = async () => {
      try {
        const response: Response = await fetch(
          `${BASE_URL}/trending?api_key=${API_KEY}&rating=R&limit=32`
        );
        const json: IGifDataList = await response.json();

        setGifs(json);
      } catch (err) {
        console.error(err);
      }
    };

    loadTrending();
  }, []);

  return (
    <div className="trending">
      <h1>Trending GIFs</h1>

      {!gifs.data ? <h2>Loading...</h2> : <GifList gifs={gifs.data} />}
    </div>
  );
};

export default Trending;
