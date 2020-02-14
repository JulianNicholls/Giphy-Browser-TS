import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ chooseTrending, chooseRandom, search, setResultCount }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <header>
      <span id="product" onClick={chooseTrending}>
        GYFI
      </span>
      <span className="img-span">
        <img
          src="/images/Poweredby_100px-Black_VertLogo.png"
          alt="Powered by Giphy"
        />
      </span>
      <span onClick={chooseTrending} className="section">
        Trending
      </span>
      <span onClick={chooseRandom} className="section">
        Random
      </span>
      <span>
        <input
          type="search"
          placeholder="search"
          value={searchText}
          onChange={evt => setSearchText(evt.target.value)}
          onKeyUp={evt => {
            if (evt.key === 'Enter') search(evt.target.value);
          }}
        />
        &nbsp;
        <select onChange={evt => setResultCount(Number(evt.target.value))}>
          <option value="24">24</option>
          <option value="48">48</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
        &nbsp;
        <button className="search" onClick={() => search(searchText)}>
          Search
        </button>
      </span>
    </header>
  );
};

Header.propTypes = {
  chooseTrending: PropTypes.func.isRequired,
  chooseRandom: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  setResultCount: PropTypes.func.isRequired,
};

export default Header;
