import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import { filterIngredientsMeals, auxiliarFuncition } from '../services/filterIngredients';
import Recomendations from '../components/Recomendations';
import ShowIngredients from '../components/Ingredients/ShowIngredients';
import { mealOrCocktail, localObject } from '../components/Ingredients/IngredientsCheckBox';
import ShareButton from '../components/Buttons/ShareButton';
import FavoriteButton from '../components/Buttons/FavoriteButton';
import DetailsButton from '../components/Buttons/DatailsButton';
import InProgressButton from '../components/Buttons/InProgressButton';
import '../styles/details.css';

const aoCarregar = (id) => {
  if (!localObject) {
    const objeto = {
      cocktails: {},
      meals: {},
    };
    objeto[mealOrCocktail][id] = [];
    return localStorage.setItem('inProgressRecipes', JSON.stringify(objeto));
  }
  return '';
};

const RecipeDetailsMeals = ({ type, match: { params: { id } } }) => {
  const iniciouReceita = window.location.pathname.includes(`${id}/in-progress`);
  const {
    recipe,
    setRecipe,
    linkCopie,
    mapDones,
  } = useContext(ComidasContext);

  aoCarregar(id);
  useEffect(() => {
    lookupFullMealDetailsById(id, type)
      .then((data) => {
        const allIngredients = filterIngredientsMeals({ ...data.meals[0] });
        const filteredAllIngredients = auxiliarFuncition(allIngredients);
        setRecipe({ ...data.meals[0], ingredients: filteredAllIngredients });
      });
  }, []);
  return (
    <div>
      <img
        className="Image-Details"
        data-testid="recipe-photo"
        src={recipe.strMealThumb}
        alt={`${recipe.strMeal}`}
      />
      <div className="Description">
        <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
        <div>
          <ShareButton type="comidas" id={id} />
          {linkCopie && <span>Link copiado!</span>}
          <FavoriteButton data={recipe} type="meal" />
        </div>
      </div>
      <section>
        <h5 className="Title-List" data-testid="recipe-category">{recipe.strCategory}</h5>
        {ShowIngredients(recipe, iniciouReceita)}
        <p className="Instruction" data-testid="instructions">{recipe.strInstructions}</p>
      </section>
      <div className="Video">
        {recipe.strYoutube === null
          ? <span>No video to attemp</span>
          : <ReactPlayer data-testid="video" url={recipe.strYoutube} width="400px" />}
      </div>
      <Recomendations type="cocktail" />
      <div className="Progresse">
        {iniciouReceita
          ? <InProgressButton data={recipe.ingredients} id={id} />
          : <DetailsButton test={mapDones} type="comidas" id={id} />}
      </div>
    </div>
  );
};

RecipeDetailsMeals.defaultProps = {
  type: '',
  id: 0,
};

RecipeDetailsMeals.propTypes = {
  type: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetailsMeals;
