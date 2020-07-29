import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ComidasContext from '../context/ComidasContext';
import { searchMealsByName } from '../services/requestMealApi';
import { searchCocktailByName } from '../services/requestCocktailApi';
import RecomendationCard from './RecomendationsCard';

const Recomendations = ({ type }) => {
  const { recomendations, setRecomendations } = useContext(ComidasContext);
  useEffect(() => {
    if (type === 'meal') {
      searchMealsByName('', type)
        .then((data) => {
          setRecomendations((data.meals).slice(0, 6));
        });
    }
    if (type === 'cocktail') {
      searchCocktailByName('')
        .then((data) => {
          setRecomendations((data.drinks).slice(0, 6));
        });
    }
  }, []);

  const upperCase = {
    meal: 'Meal',
    cocktail: 'Drink',
  };

  return (
    <div>
      <h2>Recomendações</h2>
      <div className="Rec-Menu">
        {recomendations.map((el, i) => (
          <RecomendationCard key={el[`id${upperCase[type]}`]} recipe={el} index={i} type={type} />
        ))}
      </div>
    </div>
  );
};

Recomendations.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Recomendations;
