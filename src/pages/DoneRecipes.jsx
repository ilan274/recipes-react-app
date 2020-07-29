import React, { useContext } from 'react';
import Header from '../components/Header';
import FavoriteFilters from '../components/FavoriteFilters';
import ComidasContext from '../context/ComidasContext';
import DoneCards from '../components/DoneCards';

const DoneRecipes = () => {
  const { mapDones } = useContext(ComidasContext);
  return (
    <div>
      <Header />
      {mapDones && <FavoriteFilters local />}
      {mapDones && mapDones.map((el, i) => <DoneCards key={el.id} recipe={el} index={i} />)}
    </div>
  );
};

export default DoneRecipes;
