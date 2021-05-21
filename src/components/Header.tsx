import { useState } from 'react';

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setSearchText(e.target.value)
          }
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void => {
            if (e.key === 'Enter') search(e.currentTarget.value);
          }}
        />
        &nbsp;
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
            setResultCount(Number(e.target.value))
          }
        >
          <option value="25">25</option>
          <option value="50">50</option>
          {/* <option value="100">100</option>
          <option value="200">200</option> */}
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
