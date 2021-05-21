import { useState, useEffect } from 'react';

import GifList from './GifList';

import { API_KEY, BASE_URL } from '../api';

interface TProps {
  resultCount: number;
}

const Trending = ({ resultCount }: TProps): JSX.Element => {
  const [gifs, setGifs] = useState<IGifDataList>({ data: null });

  // A useEffect() function cannot be an async function itself, so the async
  // function must be defined elsewhere (or inside, as here) and called with
  // () => { ... }.
  useEffect(() => {
    const loadTrending = async () => {
      try {
        const response: Response = await fetch(
          `${BASE_URL}/trending?api_key=${API_KEY}&rating=R&limit=${resultCount}`
        );
        const json: IGifDataList = await response.json();

        setGifs(json);
      } catch (err) {
        console.error(err);
      }
    };

    loadTrending();
  }, [resultCount]);

  return (
    <div className="trending">
      <h1>Trending GIFs</h1>

      {!gifs.data ? <h2>Loading...</h2> : <GifList gifs={gifs.data} />}
    </div>
  );
};

export default Trending;
