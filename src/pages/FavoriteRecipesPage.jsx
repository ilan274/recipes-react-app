import React, { useEffect, useContext } from 'react';
import FavoriteFilters from '../components/FavoriteFilters';
import Header from '../components/Header';
import Favorites from '../components/Favorites';
import ComidasContext from '../context/ComidasContext';

const FavoriteRecipesPage = () => {
  const { mapDefine } = useContext(ComidasContext);
  useEffect(() => {
    console.log('S2 codeClimte');
  }, [mapDefine]);
  return (
    <div>
      <Header />
      {mapDefine && <FavoriteFilters />}
      {!!mapDefine && <Favorites data={mapDefine} />}
    </div>
  );
};

export default FavoriteRecipesPage;
