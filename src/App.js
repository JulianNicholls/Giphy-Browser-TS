import React, { useState } from 'react';

import Header from './components/Header';
import Trending from './components/Trending';
import Random from './components/Random';
import SearchResults from './components/SearchResults';

import './styles/App.scss';

const App = () => {
  const [page, setPage] = useState('trending');
  const [searchText, setSearchText] = useState('');
  const [resultCount, setResultCount] = useState(24);

  const chooseRandom = () => setPage('random');
  const chooseTrending = () => setPage('trending');
  const search = searchText => {
    setSearchText(searchText);
    if (searchText !== '') setPage('searchResults');
  };
  const setSearchResultCount = count => setResultCount(count);

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
