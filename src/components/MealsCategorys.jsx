import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchAllMealCategoriesDetails, searchMealByCategory, searchMealsByName } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import Loading from './Loading';

function MealsCategorys({ type }) {
  const [filter, setFilter] = useState('');
  const { categories, setCategories, isFetching, setIsFetching, setMeals } = useContext(
    ComidasContext,
  );

  useEffect(() => {
    searchAllMealCategoriesDetails(type).then((data) => {
      setCategories((data.meals || data.drinks).slice(0, 5));
      setIsFetching(false);
    });
  }, [setCategories, setIsFetching, type]);

  useEffect(() => {
    if (filter) {
      searchMealByCategory(filter, type)
      .then((data) => setMeals((data.drinks || data.meals).slice(0, 12)));
    } else {
      searchMealsByName('', type)
      .then((data) => setMeals((data.drinks || data.meals).slice(0, 12)));
    }
  }, [filter, setMeals, type]);

  const handleClick = (category) => {
    if (category === 'All' || category === filter) setFilter('');
    else setFilter(category);
  };

  if (isFetching) return <Loading />;
  return (
    <div className="Category">
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >All
        </button>
      {categories.map((category) => (
        <button
          key={category.strCategory}
          type="button"
          data-testid={`${category.strCategory}-category-filter`}
          onClick={(e) => handleClick(e.target.innerHTML)}
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}

MealsCategorys.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MealsCategorys;
