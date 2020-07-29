import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DropDownArea from '../components/DropDownArea';
import MealsCard from '../components/MealsCard';
import { searchAllAreas, searchMealByArea, searchMealsByName } from '../services/requestMealApi';

export default function MealsExplorerByArea() {
  const [areas, setAreas] = useState([]);
  const [actArea, setActArea] = useState('All');
  const [allRecipesArea, setAllRecipesArea] = useState([]);
  useEffect(() => {
    searchAllAreas().then((data) => setAreas(data.meals));
  }, []);
  useEffect(() => {
    if (actArea !== 'All') {
      searchMealByArea(actArea).then((data) => setAllRecipesArea(data.meals.slice(0, 12)));
    }
    if (actArea === 'All') {
      searchMealsByName('', 'meal').then((data) => setAllRecipesArea(data.meals.slice(0, 12)));
    }
  }, [actArea]);
  return (
    <div>
      <Header />
      <select
        data-testid="explore-by-area-dropdown"
        name="areas"
        id="areas"
        onChange={(event) => setActArea(event.target.value)}
      >
        <option value="All" data-testid="All-option">All</option>
        {areas && areas.map((el) => <DropDownArea key={el.strArea} area={el.strArea} />)}
      </select>
      {allRecipesArea && allRecipesArea.map((el, i) => <MealsCard
        key={el.strMeal}
        recipe={el}
        index={i}
        type={'meal'}
      />)}
      <Footer />
    </div>
  );
}
