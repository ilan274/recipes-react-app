import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const detailsButtonVisible = (type, id) => {
  const StartOrNot = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const { cocktails, meals } = StartOrNot;
  let defineButton = [];
  if (type === 'comidas' && meals) defineButton = meals[id];
  if (type === 'bebidas' && cocktails) defineButton = cocktails[id];
  return (
    <Link
      to={`/${type}/${id}/in-progress`}
    >
      <button
        data-testid="start-recipe-btn"
        className="Button-Progresse"
      >
        {defineButton && defineButton.length > 0 ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>
    </Link>
  );
};

const DetailsButton = ({ test, type, id }) => {
  if (test === null) return detailsButtonVisible(type, id);
  return <div />;
};

DetailsButton.defaultProps = {
  test: null,
};

DetailsButton.propTypes = {
  test: PropTypes.arrayOf(),
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailsButton;
