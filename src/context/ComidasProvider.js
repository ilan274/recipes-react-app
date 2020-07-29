import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ComidasContext from './ComidasContext';
import { svRecipes } from '../services/data';

function ComidasProvider({ children }) {
  const favoriteMap = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [search, setSearch] = useState(false);
  const [searchType, setSearchType] = useState({ type: '', meal: '', radio: '' });
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [categories, setCategories] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [linkCopie, setLinkCopie] = useState(false);
  const [mapDefine, setMap] = useState(favoriteMap);
  const [mapDones, setMapDones] = useState(doneRecipes);

  const saveRecipes = (data) => setRecipe(svRecipes(data, setRecipe).slice(0, 12));

  const store = {
    searchValue: search,
    searchType,
    setSearchType: (meal, type) => setSearchType(meal, type),
    toggleSearch: () => setSearch(!search),
    meals,
    setMeals,
    isFetching,
    setIsFetching,
    recipe,
    setRecipe,
    categories,
    setCategories,
    recomendations,
    setRecomendations,
    linkCopie,
    setLinkCopie,
    mapDefine,
    setMap,
    mapDones,
    setMapDones,
    saveRecipes,
  };

  return <ComidasContext.Provider value={store}>{children}</ComidasContext.Provider>;
}

ComidasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComidasProvider;
