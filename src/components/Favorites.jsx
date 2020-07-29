import React from 'react';
import FavoriteCards from './FavoriteCards';

const Favorites = ({ data }) => data
  .map((el, i) => <FavoriteCards key={el.id} recipe={el} index={i} />);

export default Favorites;
