import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  searchAllIngredientsDetails,
  searchMealByMainIngredient,
} from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';

export default function MealsExplorerByIngredients({ type, history, url }) {
  const [ingredients, setIngredients] = useState([]);
  const { saveRecipes, setIsFetching } = useContext(ComidasContext);

  useEffect(() => {
    searchAllIngredientsDetails(type).then((data) =>
      setIngredients((data.meals || data.drinks).slice(0, 12)),
    );
  }, [type]);

  const handleClick = (ingredient) => {
    searchMealByMainIngredient(ingredient, type)
      .then((data) => saveRecipes(data))
      .then(() => {
        setIsFetching(false);
      })
      .then(() => history.push(`/${url}`));
  };

  return (
    <div>
      <Header />
      {ingredients.map((ingredient, index) => {
        const name = ingredient.strIngredient || ingredient.strIngredient1;
        return (
          <button
            className="teste"
            onClick={() => handleClick(name)}
            data-testid={`${index}-ingredient-card`}
          >
            <img
              src={`https://www.the${type}db.com/images/ingredients/${name}-Small.png`}
              alt={`${name} thumbnail`}
              data-testid={`${index}-card-img`}
            />
            <p data-testid={`${index}-card-name`}>{name}</p>
          </button>
        );
      })}
      <Footer />
    </div>
  );
}

MealsExplorerByIngredients.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
