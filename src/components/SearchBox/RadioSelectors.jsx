import React, { useContext } from 'react';
import ComidasContext from '../../context/ComidasContext';

function RadioSelectors() {
  const { searchType, setSearchType } = useContext(ComidasContext);
  return (
    <div className="Radio">
      <label htmlFor="Ingrediente">
        <input
          onChange={() => setSearchType({ ...searchType, type: 'meal', radio: 'ingredient' })}
          type="radio"
          data-testid="ingredient-search-radio"
          name="food"
          id="Ingrediente"
          value="Ingrediente"
        />
          ingrediente
        </label>
      <label htmlFor="Name">
        <input
          onChange={() => setSearchType({ ...searchType, type: 'meal', radio: 'name' })}
          type="radio"
          data-testid="name-search-radio"
          name="food"
          id="Name"
          value="Name"
        />
          Nome
        </label>
      <label htmlFor="Fist-Word">
        <input
          onChange={() => setSearchType({ ...searchType, type: 'meal', radio: 'firstLetter' })}
          type="radio"
          data-testid="first-letter-search-radio"
          name="food"
          id="Fist-Word"
          value="Fist-Word"
        />
          Primeira letra
        </label>
    </div>
  );
}

export default RadioSelectors;
