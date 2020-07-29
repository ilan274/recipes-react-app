import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const MealsCard = ({ recipe, index, type }) => {
  const stringsObj = {
    meal: ['comidas', 'Meal'],
    cocktail: ['bebidas', 'Drink'],
  };

  return (
    <Link to={`/${stringsObj[type][0]}/${recipe[`id${stringsObj[type][1]}`]}`}>
      <center data-testid={`${index}-recipe-card`} className="Div">
        <section className="Section">
          <div className="Image">
            <img
              data-testid={`${index}-card-img`}
              alt="Recipe"
              className="Cards"
              src={recipe[`str${stringsObj[type][1]}Thumb`]}
            />
          </div>
          <h4 data-testid={`${index}-card-name`}>
            {recipe[`str${stringsObj[type][1]}`]}
          </h4>
        </section>
      </center>
    </Link>
  );
};

MealsCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default MealsCard;
