import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="Footer" data-testid="footer">
      <Link to="/bebidas">
        <button className="Icon">
          <img
            data-testid="drinks-bottom-btn"
            src={drinkIcon} alt="drink icon"
          />
        </button>
      </Link>
      <Link to="/explorar">
        <button className="Icon">
          <img
            data-testid="explore-bottom-btn"
            src={exploreIcon} alt="explore icon"
          />
        </button>
      </Link>
      <Link to="/comidas">
        <button className="Icon">
          <img
            data-testid="food-bottom-btn"
            src={mealIcon} alt="meal icon"
          />
        </button>
      </Link>
    </footer>
  );
}
export default Footer;
