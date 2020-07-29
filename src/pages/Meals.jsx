import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchMealsByName } from '../services/requestMealApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MealsCard from '../components/MealsCard';
import Loading from '../components/Loading';
import ComidasContext from '../context/ComidasContext';
import MealsCategorys from '../components/MealsCategorys';
import '../styles/main.css';

function Meals({ type, match }) {
  const { searchValue, meals, setMeals, isFetching, setIsFetching } = useContext(ComidasContext);
  useEffect(() => {
    searchMealsByName('', type).then((data) => {
      setMeals((data.meals || data.drinks).slice(0, 12));
      setIsFetching(false);
    });
  }, [setMeals, setIsFetching, type]);

  const upperCase = {
    meal: 'Meal',
    cocktail: 'Drink',
  };

  if (isFetching) return <Loading />;
  const { id } = match.params;
  return (
    <div>
      {!id && <Header search />}
      {searchValue && <SearchBar />}
      <div>
        <MealsCategorys type={type} />
      </div>
      <div className="Map">
        {meals.map((meal, index) => (
          <MealsCard key={meal[`id${upperCase[type]}`]} recipe={meal} index={index} type={type} />
        ))}
      </div>
      {!id && <Footer />}
    </div>
  );
}

Meals.propTypes = {
  type: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Meals.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Meals;
