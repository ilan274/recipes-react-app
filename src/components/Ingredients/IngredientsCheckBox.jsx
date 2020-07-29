import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/ingredients.css';

export const mealOrCocktail = window.location.pathname.includes('bebidas') ? 'cocktails' : 'meals';
export const localObject = JSON.parse(localStorage.getItem('inProgressRecipes'));
const arrayWithoutElementAtIndex = function (arr, index) {
  return arr.filter(function (value, arrIndex) {
    return index !== arrIndex;
  });
};


const editStorage = (recipeId, id) => {
  const objPadrao = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (objPadrao[mealOrCocktail][recipeId].includes(id)) {
    const removeIndex = objPadrao[mealOrCocktail][recipeId].indexOf(id);
    const oldArr = objPadrao[mealOrCocktail][recipeId];
    const newArr = objPadrao;
    newArr[mealOrCocktail][recipeId] = arrayWithoutElementAtIndex(oldArr, removeIndex);
    return localStorage.setItem('inProgressRecipes', JSON.stringify(newArr));
  }
  objPadrao[mealOrCocktail][recipeId].push(id);
  return localStorage.setItem('inProgressRecipes', JSON.stringify(objPadrao));
};

function IngredientsCheckBox({ el, id, recipeId }) {
  const objeto = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const [checked] = useState(objeto[mealOrCocktail][recipeId].includes(id));

  return (
    <div data-testid={`${id}-ingredient-step`}>
      <label
        htmlFor="options"
        className={checked ? 'selected' : 'notSelected'}
      >
        <input
          onChange={() => editStorage(recipeId, id)}
          checked={checked}
          type="checkbox"
          key={el[0]}
          id="options"
        />
        {`-${el[0]} - ${el[1] || 'a gosto'}`}
      </label>
    </div>
  );
}

IngredientsCheckBox.propTypes = {
  el: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default IngredientsCheckBox;
