import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ComidasContext from '../context/ComidasContext';
import Footer from '../components/Footer';
import '../styles/explore.css';

function Explorar() {
  const { searchValue } = useContext(ComidasContext);

  return (
    <div>
      <Header />
      {searchValue && <SearchBar />}
      <section className="Explore">
        <Link to="/explorar/comidas">
          <button className="Button-Explore" type="button" data-testid="explore-food">
            Explorar Comidas
        </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button className="Button-Explore" type="button" data-testid="explore-drinks">
            Explorar Bebidas
        </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Explorar;
