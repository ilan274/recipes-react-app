import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShareButtoon from '../components/Buttons/ShareButton';
import ComidasContext from '../context/ComidasContext';
import '../styles/rec-feitas-fav.css';

const MealCardDone = (recipe, index) => {
  const { linkCopie } = useContext(ComidasContext);
  const { id, category, area, name, image, doneDate, tags } = recipe;
  return (
    <div className="Fav">
      <div className="Fav-Card">
        <Link to={`/comidas/${id}`}>
          <img
            data-testid={`${index}-horizontal-image`}
            className="Rec-Image"
            src={image}
            alt="recipe"
          />
        </Link>
        <div className="Infos">
          <p data-testid={`${index}-horizontal-top-text`} className="Fav-Title">
            {`${area} - ${category}`}
          </p>
          <Link to={`/comidas/${id}`}>
            <h3 className="Rec-Name" data-testid={`${index}-horizontal-name`}>
              {name}
            </h3>
          </Link>
          <h3 data-testid={`${index}-horizontal-done-date`}>
            {doneDate}
          </h3>
          <h3>
            {tags.map((el) => <p data-testid={`${index}-${el}-horizontal-tag`} >{el}</p>)}
          </h3>
          <div className="Icon-Div">
            <ShareButtoon local index={index} type="comidas" id={id} />
            {linkCopie ? <span>Link copiado!</span> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const CockTailCardDone = (recipe, index) => {
  const { id, alcoholicOrNot, name, image, doneDate } = recipe;
  return (
    <div className="Fav">
      <div className="Fav-Card">
        <Link to={`/bebidas/${id}`}>
          <img
            data-testid={`${index}-horizontal-image`}
            className="Rec-Image"
            src={image}
            alt="recipe"
          />
        </Link>
        <div className="Infos">
          <p className="Fav-Title" data-testid={`${index}-horizontal-top-text`}>
            {alcoholicOrNot}
          </p>
          <Link to={`/bebidas/${id}`}>
            <h3 className="Rec-Name" data-testid={`${index}-horizontal-name`}>
              {name}
            </h3>
          </Link>
          <h3 data-testid={`${index}-horizontal-done-date`}>
            {doneDate}
          </h3>
          <div className="Icon-Div">
            <ShareButtoon local index={index} type="bebidas" id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DoneCards = ({ recipe, index }) => {
  const { type } = recipe;
  if (type === 'comida') return MealCardDone(recipe, index);
  if (type === 'bebida') return CockTailCardDone(recipe, index);
  return 'S2 codeClimate';
};

export default DoneCards;
