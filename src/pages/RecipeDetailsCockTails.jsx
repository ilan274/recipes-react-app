import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lookupFullMealDetailsById } from '../services/requestMealApi';
import { filterIngredientsCockTails, auxiliarFuncition } from '../services/filterIngredients';
import ComidasContext from '../context/ComidasContext';
import ShowIngredients from '../components/Ingredients/ShowIngredients';
import Recomendations from '../components/Recomendations';
import ShareButton from '../components/Buttons/ShareButton';
import FavoriteButton from '../components/Buttons/FavoriteButton';
import { mealOrCocktail, localObject } from '../components/Ingredients/IngredientsCheckBox';
import DetailsButton from '../components/Buttons/DatailsButton';
import InProgressButton from '../components/Buttons/InProgressButton';
import '../styles/details.css';

const aoCarregarBebidas = (id) => {
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

const RecipeDetailsCockTails = ({ match: { params: { id } }, type }) => {
  const iniciouReceita = window.location.pathname.includes(`${id}/in-progress`);
  const {
    recipe,
    setRecipe,
    linkCopie,
    mapDones,
  } = useContext(ComidasContext);
  aoCarregarBebidas(id);
  useEffect(() => {
    lookupFullMealDetailsById(id, type)
      .then((data) => {
        const allIngredients = filterIngredientsCockTails({ ...data.drinks[0] });
        const filteredAllIngredients = auxiliarFuncition(allIngredients);
        setRecipe({ ...data.drinks[0], ingredients: filteredAllIngredients });
      });
  }, [id]);
  return (
    <section>
      <div>
        <img
          className="Image-Details"
          data-testid="recipe-photo"
          src={recipe.strDrinkThumb}
          alt={`${recipe.strDrink}`}
        />
      </div>
      <div className="Description">
        <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
        <div>
          <ShareButton type="bebidas" id={id} />
          {linkCopie && <span>Link copiado!</span>}
          <FavoriteButton data={recipe} type="cocktail" />
        </div>
      </div>
      <section>
        <h5 className="Title-List" data-testid="recipe-category">{recipe.strAlcoholic}</h5>
        {ShowIngredients(recipe, iniciouReceita)}
        <p className="Instruction" data-testid="instructions">{recipe.strInstructions}</p>
      </section>
      <Recomendations type="meal" />
      <div className="Progresse">
        {iniciouReceita
          ? <InProgressButton />
          : <DetailsButton test={mapDones} type="bebidas" id={id} />}
      </div>
    </section>
  );
};

RecipeDetailsCockTails.defaultProps = {
  type: '',
  id: 0,
};

RecipeDetailsCockTails.propTypes = {
  type: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeDetailsCockTails;
