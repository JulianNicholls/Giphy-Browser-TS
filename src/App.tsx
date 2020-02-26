import React, { useState } from 'react';

import Header from './components/Header';
import Trending from './components/Trending';
import Random from './components/Random';
import SearchResults from './components/SearchResults';

import './styles/App.scss';

const App = () => {
  const [page, setPage] = useState<string>('trending');
  const [searchText, setSearchText] = useState<string>('');
  const [resultCount, setResultCount] = useState<number>(24);

  const chooseRandom = (): void => setPage('random');

  const chooseTrending = (): void => setPage('trending');

  const search = (searchText: string): void => {
    setSearchText(searchText);
    if (searchText !== '') setPage('searchResults');
  };

  const setSearchResultCount = (count: number): void => setResultCount(count);

  return (
    <div>
      <Header
        chooseRandom={chooseRandom}
        chooseTrending={chooseTrending}
        search={search}
        setResultCount={setSearchResultCount}
      />
      <main className="container">
        {page === 'trending' && <Trending />}
        {page === 'random' && <Random />}
        {page === 'searchResults' && (
          <SearchResults searchText={searchText} resultCount={resultCount} />
        )}
      </main>
    </div>
  );
};

export default App;
