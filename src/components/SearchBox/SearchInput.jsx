import React, { useContext } from 'react';
import ComidasContext from '../../context/ComidasContext';

const SearchInput = () => {
  const { searchType, setSearchType } = useContext(ComidasContext);
  return (
    <div>
      <input
        type="search"
        onChange={(e) => setSearchType({ ...searchType, meal: e.target.value })}
        data-testid="search-input"
        placeholder="Buscar Receita"
        className="Input-Search"
      />
    </div>
  );
};

export default SearchInput;
