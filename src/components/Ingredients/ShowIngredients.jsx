import React from 'react';
import IngredientsCheckBox from './IngredientsCheckBox';
import Ingredients from './Ingredients';

function ShowIngredients(recipe, iniciouReceita) {
  const id = window.location.pathname.includes('bebidas') ? recipe.idDrink : recipe.idMeal;

  if (iniciouReceita && recipe.ingredients) {
    return recipe.ingredients
      .map((el, i) => <IngredientsCheckBox key={el} el={el} id={i} recipeId={id} />);
  }
  return <Ingredients value={recipe} />;
}

export default ShowIngredients;
