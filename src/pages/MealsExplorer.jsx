import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { lookupSingleRandomMeal } from '../services/requestMealApi';
import ComidasContext from '../context/ComidasContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import '../styles/explore.css';

export default function MealsExplorer({ type }) {
  const { setMeals } = useContext(ComidasContext);
  const [link, setLink] = useState('');

  const location = useLocation();

  useEffect(() => {
    lookupSingleRandomMeal(type).then((data) => {
      setMeals(data.meals || data.drinks);
      if (data.meals) {
        setLink(`/comidas/${data.meals[0].idMeal}`);
        return;
      }
      setLink(`/bebidas/${data.drinks[0].idDrink}`);
    });
  }, [setMeals, type]);

  return link ? (
    <div>
      <Header />
      <section className="Explore">
        <Link to={`${location.pathname}/ingredientes`} >
          <button className="Button-Explore" type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
        </button>
        </Link>
        {location.pathname.slice(10) === 'comidas' && (
          <Link to={`${location.pathname}/area`} >
            <button className="Button-Explore" type="button" data-testid="explore-by-area">
              Por Local de Origem
          </button>
          </Link>
        )}
        <Link to={link} >
          <button className="Button-Explore" type="button" data-testid="explore-surprise">
            Me Surpreenda!
        </button>
        </Link>
      </section>
      <Footer />
    </div>
  ) : <Loading />;
}

MealsExplorer.propTypes = {
  type: PropTypes.string.isRequired,
};
