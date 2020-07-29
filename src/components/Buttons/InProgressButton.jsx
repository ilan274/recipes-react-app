import React from 'react';
import { Link } from 'react-router-dom';

const InProgressButton = () => (
  <Link to="/receitas-feitas">
    <button
      data-testid="finish-recipe-btn"
      className="Button-Progresse"
    >
      Finalizar Receita
    </button>
  </Link>
);

export default InProgressButton;
