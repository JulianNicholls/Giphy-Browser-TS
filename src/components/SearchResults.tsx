import React, { useState, useEffect } from 'react';

import GifList from './GifList';

import { API_KEY, BASE_URL } from '../api';

interface SRProps {
  searchText: string;
  resultCount: number;
}

const SearchResults = (props: SRProps): JSX.Element => {
  const [gifs, setGifs] = useState<IGifDataList>({ data: null });
  const { searchText, resultCount } = props;

  useEffect(() => {
    const loadResults = async () => {
      try {
        const response: Response = await fetch(
          `${BASE_URL}/search?q=${searchText}&api_key=${API_KEY}&rating=R&limit=${resultCount}`
        );
        const json: IGifDataList = await response.json();

        setGifs(json);
      } catch (err) {
        console.error(err);
      }
    };

    loadResults();
  }, [searchText, resultCount]);

  return (
    <div>
      <h1>
        Search Results: <small>{searchText}</small>
      </h1>

      {gifs.data ? <GifList gifs={gifs.data} /> : <h2>Loading...</h2>}
    </div>
  );
};

export default SearchResults;
