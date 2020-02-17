import React, { useState } from 'react';

interface IHeader {
  chooseTrending(): void;
  chooseRandom(): void;
  search(text: string): void;
  setResultCount(n: number): void;
}

const Header = (props: IHeader) => {
  const [searchText, setSearchText] = useState('');
  const { chooseTrending, chooseRandom, search, setResultCount } = props;

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
          onChange={(evt: React.ChangeEvent<HTMLInputElement>): void =>
            setSearchText(evt.target.value)
          }
          onKeyUp={(evt: React.KeyboardEvent<HTMLInputElement>): void => {
            if (evt.key === 'Enter') search(evt.currentTarget.value);
          }}
        />
        &nbsp;
        <select
          onChange={(evt: React.ChangeEvent<HTMLSelectElement>): void =>
            setResultCount(Number(evt.target.value))
          }
        >
          <option value="24">24</option>
          <option value="48">48</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
        &nbsp;
        <button className="search" onClick={(): void => search(searchText)}>
          Search
        </button>
      </span>
    </header>
  );
};

export default Header;
