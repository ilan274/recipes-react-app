import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ComidasContext from '../context/ComidasContext';
import '../styles/rec-feitas-fav.css';

const Allbutton = ({ localstorageAll, setlocalstorageAll }) => (
  <button
    className="Filter-Button"
    data-testid="filter-by-all-btn"
    onClick={() => setlocalstorageAll(localstorageAll)}
  >
    All
  </button>
);

const FoodButton = ({ localstorageFood, setlocalstorageFood }) => {
  const filteredLocalFood = localstorageFood
    .filter((el) => el.type === 'comida');
  return (
    <button
      className="Filter-Button"
      data-testid="filter-by-food-btn"
      onClick={() => setlocalstorageFood(filteredLocalFood)}
    >
      Food
    </button>
  );
};

const DrinksButton = ({ localstorageDrinks, setlocalstorageDrinks }) => {
  const filteredLocalDrinks = localstorageDrinks
    .filter((el) => el.type === 'bebida');
  return (
    <button
      className="Filter-Button"
      data-testid="filter-by-drink-btn"
      onClick={() => setlocalstorageDrinks(filteredLocalDrinks)}
    >
      Drinks
    </button>
  );
};

const FavoriteFilters = ({ local }) => {
  const { setMap, setMapDones } = useContext(ComidasContext);
  const mainStorage = local
    ? JSON.parse(localStorage.getItem('doneRecipes'))
    : JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <div>
      <Allbutton
        localstorageAll={mainStorage}
        setlocalstorageAll={local ? setMapDones : setMap}
      />
      <FoodButton
        localstorageFood={mainStorage}
        setlocalstorageFood={local ? setMapDones : setMap}
      />
      <DrinksButton
        localstorageDrinks={mainStorage}
        setlocalstorageDrinks={local ? setMapDones : setMap}
      />
    </div>
  );
};

FavoriteFilters.defaultProps = {
  local: false,
};

FavoriteFilters.propTypes = {
  local: PropTypes.bool,
};

Allbutton.propTypes = {
  localstorageAll: PropTypes.arrayOf.isRequired,
  setlocalstorageAll: PropTypes.func.isRequired,
};

FoodButton.propTypes = {
  localstorageFood: PropTypes.arrayOf().isRequired,
  setlocalstorageFood: PropTypes.func.isRequired,
};

DrinksButton.propTypes = {
  localstorageDrinks: PropTypes.arrayOf().isRequired,
  setlocalstorageDrinks: PropTypes.func.isRequired,
};

export default FavoriteFilters;
